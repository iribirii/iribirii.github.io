#!/usr/bin/env bash
# Run the same checks that commonly fail on push (Prettier + RenderCV).
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Prettier"
node node_modules/prettier/bin/prettier.cjs . --check

echo "==> RenderCV validate/render"
if ! command -v rendercv >/dev/null 2>&1; then
  echo "rendercv not on PATH; install with: python3 -m pip install -r requirements.txt" >&2
  exit 1
fi
rendercv render _data/cv.yml --settings assets/rendercv/settings.yaml

echo "All local CI checks passed."
