// TO DO
// Connect to database
// Handle case when user enters blockly_unix without being logged in
// Add regex for email handling
// Fix issue with blockly Data Processing sub categories
// Store blockly unix history in database

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
// const mysql = require('mysql');

const { body, validationResult } = require('express-validator');

initializePassport(
  passport,
  (username) => users.find((user) => user.username === username),
  (id) => users.find((user) => user.id === id)
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

function checkRememberMe(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  const token = req.cookies.remember_me;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return next();
      }
      const user = users.find((user) => user.id === decoded.user);
      if (user) {
        req.logIn(user, (err) => {
          if (err) {
            return next();
          }
          return res.redirect('/blockly_unix');
        });
      } else {
        return next(); // User not found, continue to next middleware
      }
    });
  } else {
    return next(); // No token, continue to next middleware
  }
}

// Middleware to add auth token
function addAuthToken(req, res, next) {
  if (req.isAuthenticated()) {
    const token = jwt.sign({ user: req.user.id }, process.env.SECRET_KEY, {
      expiresIn: '10s'
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
        expiresIn: '10'
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
      users.push(newUser);
      console.log(users);
      req.logIn(newUser, (err) => {
        if (err) {
          console.log(err);
          req.flash('error', 'Registration failed.');
          return res.redirect('/register');
        }
        req.flash('success', 'You have successfully registered and logged in.');
        res.redirect('/blockly_unix');
      });
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
    res.status(401).json({ authToken: null, user: null });
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
