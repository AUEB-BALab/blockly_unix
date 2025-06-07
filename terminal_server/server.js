const express = require('express');
const { Server } = require('ws');
const pty = require('node-pty');
const path = require('path');
const fs = require('fs-extra');
const os = require('os');

const app = express();
const PORT = 5000;

const staticString = 'ublocks_sandbox_ab8fx';
const baseDir = path.join(os.tmpdir(), staticString);

if (fs.existsSync(baseDir)) {
  fs.removeSync(baseDir);
}
fs.mkdirSync(baseDir);
populateFiles(baseDir);

// 🧹 Clean up on exit
function cleanExit() {
  console.log('\n🧹 Cleaning up sandbox...');
  fs.removeSync(baseDir);
  process.exit();
}
process.on('SIGINT', cleanExit);
process.on('SIGTERM', cleanExit);

// 🌐 Start server
const server = app.listen(PORT, () => {
  console.log(`🟢 Terminal server running on http://localhost:${PORT}`);
});

const wss = new Server({ server });

wss.on('connection', function (ws) {
  const shell = pty.spawn('/bin/bash', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 24,
    cwd: baseDir,
    env: {
      ...process.env,
      HOME: baseDir,
      TERM: 'xterm-256color'
    }
  });

  shell.write(`cd ${baseDir} && clear\r`);

  shell.on('data', (data) => ws.send(data));

  let inputBuffer = '';

  ws.on('message', (msg) => {
    const char = msg.toString();
    inputBuffer += char;

    if (char === '\r' || char === '\n') {
      const command = inputBuffer.trim();

      const blockedPatterns = [
        'cd /',
        'cd ..',
        'cd ~',
        'sudo',
        'rm -rf',
        'rm --no-preserve-root',
        'reboot',
        'shutdown',
        'poweroff',
        'kill',
        'dd if=',
        ':(){ :|:& };:',
        'mv /',
        'cp /',
        'chmod 777 /',
        'chown root',
        '>:',
        'exit'
      ];

      const isBlocked = blockedPatterns.some(pattern =>
        command.startsWith(pattern) || command.includes(pattern)
      );

      if (isBlocked) {
        shell.write(`' '\n`);
        inputBuffer = '';
        return;
      }

      inputBuffer = '';
      shell.write(char);
    } else {
      shell.write(char);
    }
  });

  ws.on('close', () => shell.kill());
});

function populateFiles(baseDir) {
  fs.mkdirSync(path.join(baseDir, 'docs'));
  fs.mkdirSync(path.join(baseDir, 'scripts'));
  fs.mkdirSync(path.join(baseDir, 'projects'));
  fs.mkdirSync(path.join(baseDir, 'logs'));
  fs.mkdirSync(path.join(baseDir, 'bin'));
  fs.mkdirSync(path.join(baseDir, 'data'));

  fs.writeFileSync(path.join(baseDir, 'welcome.txt'), 'Welcome to the Ublocks sandbox!');
  fs.writeFileSync(path.join(baseDir, 'README.md'), '# Ublocks Terminal\nTry ls, cd, cat, grep...');
  fs.writeFileSync(path.join(baseDir, 'notes.txt'), 'Use `grep`, `awk`, `cut`, and have fun.');

  for (let i = 1; i <= 5; i++) {
    const name = `script${i}.sh`;
    const content = `#!/bin/bash\necho This is ${name}`;
    const pathFull = path.join(baseDir, 'scripts', name);
    fs.writeFileSync(pathFull, content);
    fs.chmodSync(pathFull, 0o755);
  }

  for (let i = 1; i <= 5; i++) {
    fs.writeFileSync(path.join(baseDir, 'logs', `log${i}.txt`), `Log file ${i}...\nLine 2\nLine 3`);
  }

  for (let i = 1; i <= 5; i++) {
    const pathFull = path.join(baseDir, 'projects', `proj${i}.txt`);
    fs.writeFileSync(pathFull, `Project ${i} description\nStatus: In Progress`);
  }

  for (let i = 1; i <= 5; i++) {
    const pathFull = path.join(baseDir, 'docs', `doc${i}.md`);
    fs.writeFileSync(pathFull, `# Doc ${i}\nThis is document ${i}.`);
  }

  for (let i = 1; i <= 5; i++) {
    const pathFull = path.join(baseDir, 'data', `input${i}.txt`);
    fs.writeFileSync(pathFull, `input line ${i}\nvalue: ${i * 42}`);
  }

  const csvContent = `name,email,age
  Alice,alice@example.com,30
  Bob,bob@mail.com,25
  Charlie,charlie@aueb.gr,28
  Dana,dana123@outlook.com,32
  Eve,eve@company.org,22`;
  fs.writeFileSync(path.join(baseDir, 'users.csv'), csvContent);

  fs.writeFileSync(path.join(baseDir, 'bin', 'hello'), '#!/bin/bash\necho Hello, binary world!');
  fs.chmodSync(path.join(baseDir, 'bin', 'hello'), 0o755);
}
