#!/bin/bash

set -e

echo "🚀 Ublocks Terminal Server Installer"

# === STEP 1: Check Node.js ===
if ! command -v node >/dev/null 2>&1; then
  echo "⚠️ Node.js not found. Installing via nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  source "$NVM_DIR/nvm.sh"
  nvm install --lts
  nvm use --lts
else
  echo "✅ Node.js found: $(node -v)"
fi

# === STEP 2: Check unzip ===
if ! command -v unzip >/dev/null 2>&1; then
  echo "❌ 'unzip' is required but not installed."
  echo "Please install unzip manually:"
  echo "- Debian/Ubuntu: sudo apt install unzip"
  echo "- macOS: brew install unzip"
  echo "- Arch: sudo pacman -S unzip"
  exit 1
fi

# === STEP 3: Check Git ===
has_git=true
if ! command -v git >/dev/null 2>&1; then
  echo "⚠️ Git not found. Will fallback to Dropbox ZIP."
  has_git=false
fi

# === STEP 4: macOS warning for native build ===
if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "🍏 macOS detected. Please ensure:"
  echo "- Xcode CLI tools: xcode-select --install"
  echo "- Python 3: brew install python (if missing)"
  echo "- node-gyp: npm install -g node-gyp"
fi

# === STEP 5: Create sandbox dir ===
RND_FOLDER="$HOME/ublocks_run_392jd"

if [ -d "$RND_FOLDER" ]; then
  echo "🧹 Removing previous install at $RND_FOLDER..."
  rm -rf "$RND_FOLDER"
fi

mkdir -p "$RND_FOLDER"
cd "$RND_FOLDER"

# === STEP 6: Try Git clone ===
clone_success=false

if [ "$has_git" = true ]; then
  echo "🌐 Attempting sparse git clone..."
  git clone --depth 1 --filter=blob:none --sparse https://github.com/AUEB-BALab/blockly_unix.git . && \
  git sparse-checkout init --cone && \
  git sparse-checkout set terminal_server && \
  clone_success=true
fi

# === STEP 7: Fallback to Dropbox ===
if [ "$clone_success" = false ] || [ ! -d "terminal_server" ]; then
  echo "🔁 Git failed or terminal_server folder not found — using Dropbox fallback..."
  curl -L "https://www.dropbox.com/scl/fi/tt63gle6of8emx07jll8q/terminal_server.zip?rlkey=8z75cvofpdmezuq6li70sqryw&dl=1" -o terminal_server.zip
  unzip -q terminal_server.zip
  rm terminal_server.zip
fi

# === STEP 8: Start server ===
cd terminal_server

echo "📦 Installing npm packages..."
npm install

# === STEP 9: Cleanup logic
cleanup() {
  echo -e "\n🧹 Cleaning up sandbox from $RND_FOLDER..."
  rm -rf "$RND_FOLDER"
  echo "✅ Done. Goodbye!"
  exit 0
}
trap cleanup SIGINT SIGTERM EXIT

if lsof -i :5000 >/dev/null; then
  echo "❌ Port 5000 is already in use. Please stop the other instance or use a different port."
  exit 1
fi


echo "🟢 Running Terminal Server..."
node server.js
