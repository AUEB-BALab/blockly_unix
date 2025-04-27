const express = require('express');
const { Server } = require('ws');
const pty = require('node-pty');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Allow CORS from your main frontend
app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`Terminal server running on http://localhost:${PORT}`);
});

// WebSocket server
const wss = new Server({ server });

wss.on('connection', function (ws) {
    const shell = pty.spawn('/bin/bash', ['--rcfile', path.join(__dirname, 'sandbox.sh'), '--noprofile', '--norc'], {
        name: 'xterm-color',
        cols: 80,
        rows: 24,
        cwd: '/home/sandbox',
        env: {
            ...process.env,
            HOME: '/home/sandbox',
            TERM: 'xterm-256color'
          },          
      });   
  shell.on('data', function (data) {
    ws.send(data);
  });

  ws.on('message', function (msg) {
    shell.write(msg);
  });

  ws.on('close', function () {
    shell.kill();
  });
});
