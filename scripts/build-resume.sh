#!/usr/bin/env bash
# Renders resume/resume.html to public/Seth_Welch_Resume.pdf with headless Chrome.
# Run after editing the résumé: npm run resume
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$ROOT/public/Seth_Welch_Resume.pdf" \
  "file://$ROOT/resume/resume.html" 2>/dev/null

echo "Wrote public/Seth_Welch_Resume.pdf"
