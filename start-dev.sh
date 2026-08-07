#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

BIN_DIR="$ROOT/.tools/bin"
NODE_HELPER="/usr/share/cursor/resources/app/resources/helpers/node"
mkdir -p "$BIN_DIR"

if [ -x "$NODE_HELPER" ]; then
  ln -sfn "$NODE_HELPER" "$BIN_DIR/node"
  cat > "$BIN_DIR/npm" <<'EOF'
#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
export PATH="$DIR:$PATH"
export NODE_PATH="/usr/share/nodejs${NODE_PATH:+:$NODE_PATH}"
exec "$DIR/node" /usr/share/nodejs/npm/bin/npm-cli.js "$@"
EOF
  chmod +x "$BIN_DIR/npm" "$BIN_DIR/node" 2>/dev/null || chmod +x "$BIN_DIR/npm"
  export PATH="$BIN_DIR:$PATH"
  export NODE_PATH="/usr/share/nodejs"
elif command -v node >/dev/null && command -v npm >/dev/null; then
  echo "Using system node/npm"
else
  echo "Node.js not found. Install Node 20+ from https://nodejs.org then re-run."
  exit 1
fi

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"

# Free the port if something is already bound
if command -v fuser >/dev/null 2>&1; then
  fuser -k 5173/tcp 2>/dev/null || true
elif command -v lsof >/dev/null 2>&1; then
  lsof -ti:5173 | xargs -r kill -9 2>/dev/null || true
fi
pkill -f "node_modules/.bin/vite" 2>/dev/null || true
sleep 1

if [ ! -d node_modules/vite ]; then
  npm install
fi

echo "Starting Vite at http://127.0.0.1:5173/"
exec npm run dev -- --host 127.0.0.1 --port 5173
