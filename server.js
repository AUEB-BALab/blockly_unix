// TO DO
// Fix issue with blockly Data Processing sub categories

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Importing libraries installed with npm
const express = require('express');
const app = express();
const path = require('path');

//Replace when integrate with database
const users = [];
const bcrypt = require('bcrypt'); // Importing bcrypt library
const passport = require('passport');
const initializePassport = require('./passport-config');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const sqlite3 = require('sqlite3').verbose();
app.use(express.json());
const db = new sqlite3.Database('blockly_unix_database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});

const { body, validationResult } = require('express-validator');

initializePassport(
  passport,
  (username, done) => {
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
      if (err) return done(err);
      if (!row) return done(null, false);
      return done(null, row);
    });
  },
  (id, done) => {
    db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
      if (err) return done(err);
      if (!row) return done(null, false);
      return done(null, row);
    });
  }
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false, // Don't save back to the session store if nothing has changed
    saveUninitialized: false // Don't save if there was no data
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use((req, res, next) => {
  if (req.session) {
    req.session._garbage = Date();
    req.session.touch();
  }
  next();
});

// Middleware to add auth token
function addAuthToken(req, res, next) {
  if (req.isAuthenticated()) {
    const token = jwt.sign({ user: req.user.id }, process.env.SECRET_KEY, {
      expiresIn: '20m'
    }); // Token expires in 10 seconds for testing. When in production, set to 20 minutes
    req.authToken = token;
  } else {
    req.authToken = null;
  }
  next();
}

// Configuring the login post functionality
app.post('/login', checkNotAuthenticated, (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('error', 'Invalid username or password.');
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', 'You have successfully logged in.');
      const token = jwt.sign({ user: user.id }, process.env.SECRET_KEY, {
        expiresIn: '20m'
      });
      res.cookie('remember_me', token, { httpOnly: true });
      res.redirect('/blockly_unix');
    });
  })(req, res, next);
});

// Configuring the register post functionality
app.post(
  '/register',
  checkNotAuthenticated,
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Password must contain a special character'),
  body('email')
    .isEmail()
    .withMessage('Must be a valid email address')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash(
        'error',
        errors.array().map((error) => error.msg)
      );
      return res.redirect('/register');
    }
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = {
        id: Date.now().toString(),
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      };
      db.run(
        `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`,
        [
          Date.now().toString(),
          req.body.username,
          req.body.email,
          hashedPassword
        ],
        function (err) {
          if (err) {
            console.log(err.message);
            req.flash('error', 'Registration failed.');
            return res.redirect('/register');
          }
          req.logIn(newUser, (err) => {
            if (err) {
              console.log(err);
              req.flash('error', 'Registration failed.');
              return res.redirect('/register');
            }
            req.flash(
              'success',
              'You have successfully registered and logged in.'
            );
            res.redirect('/blockly_unix');
          });
        }
      );
      db.run(
        `INSERT INTO workspaces (workspaceData, userId, workspaceName) VALUES (?, ?, ?)`,
        ['{}', newUser.id, '__autosave__'],
        function (err) {
          if (err) {
            console.log(err.message);
            req.flash('error', 'Registration failed.');
            return res.redirect('/register');
          }
        }
      );
    } catch (e) {
      console.log(e);
      req.flash('error', 'Registration failed.');
      res.redirect('/register');
    }
  }
);

// Routes
app.get('/', (req, res) => {
  res.render('homePage', { errorMessages: req.flash('error') || [] });
});

app.get('/tutorials', (req, res) => {
  res.render('tutorials', { errorMessages: req.flash('error') || [] });
});

app.get('/blockly_unix', addAuthToken, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), {
    headers: { 'X-Auth-Token': req.authToken || '' }
  });
  //console.log('Token:', req.authToken);
});

app.get('/auth-token', addAuthToken, (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      authToken: req.authToken || '',
      user: {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
      }
    });
  } else {
    res.json({
      message: 'User is not authenticated',
      authToken: null,
      user: null
    });
  }
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login', { errorMessages: req.flash('error') || [] });
});

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register', { errorMessages: req.flash('error') || [] });
});

app.delete('/logout', (req, res, next) => {
  res.clearCookie('remember_me');
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.get('/logout', function (req, res, next) {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  }
});

app.post('/saveWorkspace', (req, res) => {
  // Retrieve the workspace data and user ID from the request body
  const { workspaceData, userId, workspaceName } = req.body;

  if (!workspaceData || !userId) {
    return res
      .status(400)
      .json({ error: 'Missing workspace data or user ID.' });
  }

  // Insert the workspace data and user ID into the database
  const query = `INSERT INTO workspaces (workspaceData, userId, workspaceName) VALUES (?, ?, ?)`;

  db.run(query, [workspaceData, userId, workspaceName], function (err) {
    if (err) {
      console.error('Error inserting workspace data:', err.message);
      return res.status(500).json({ error: 'Failed to save workspace data.' });
    }

    res.status(200).json({
      message: 'Workspace data saved successfully.',
      workspaceId: this.lastID // Return the ID of the inserted workspace
    });
  });
});

app.post('/autoSaveWorkspace', (req, res) => {
  const { workspaceData, userId } = req.body;

  if (!workspaceData || !userId) {
    return res
      .status(400)
      .json({ error: 'Missing workspace data or user ID.' });
  }

  // Query to update the __autosave__ workspace
  const query = `UPDATE workspaces SET workspaceData = ? WHERE userId = ? AND workspaceName = '__autosave__'`;

  db.run(query, [workspaceData, userId], function (err) {
    if (err) {
      console.error('Error auto-saving workspace:', err.message);
      return res.status(500).json({ error: 'Failed to auto-save workspace.' });
    }

    // If no rows were updated, it means the __autosave__ entry doesn't exist. Insert a new one.
    if (this.changes === 0) {
      const insertQuery = `INSERT INTO workspaces (workspaceData, userId, workspaceName) VALUES (?, ?, '__autosave__')`;
      db.run(insertQuery, [workspaceData, userId], function (err) {
        if (err) {
          console.error('Error inserting __autosave__ workspace:', err.message);
          return res
            .status(500)
            .json({ error: 'Failed to auto-save workspace.' });
        }

        res.status(200).json({ message: 'Workspace auto-saved successfully.' });
      });
    } else {
      res.status(200).json({ message: 'Workspace auto-saved successfully.' });
    }
  });
});

app.get('/getUserWorkspaces', (req, res) => {
  // Assume that userId is passed as a query parameter or extracted from session
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: 'Missing user ID.' });
  }

  // Query to select workspaces for the given userId
  const query = `SELECT id, workspaceName FROM workspaces WHERE userId = ?`;

  db.all(query, [userId], (err, rows) => {
    if (err) {
      console.error('Error retrieving workspaces:', err.message);
      return res.status(500).json({ error: 'Failed to retrieve workspaces.' });
    }

    res.status(200).json({ workspaces: rows });
  });
});

app.get('/getWorkspace', (req, res) => {
  const workspaceId = req.query.workspaceId;

  if (!workspaceId) {
    return res.status(400).json({ error: 'Missing workspace ID.' });
  }

  const query = `SELECT workspaceData FROM workspaces WHERE id = ?`;

  db.get(query, [workspaceId], (err, row) => {
    if (err) {
      console.error('Error retrieving workspace:', err.message);
      return res.status(500).json({ error: 'Failed to retrieve workspace.' });
    }

    if (!row) {
      return res.status(404).json({ error: 'Workspace not found.' });
    }

    res.status(200).json({ workspaceData: row.workspaceData });
  });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/blockly_unix');
  }
  next();
}

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
