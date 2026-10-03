#!/usr/bin/env bash
# Rebuild the site and refresh the files GitHub Pages actually serves.
#
# GitHub Pages serves the MAIN BRANCH ROOT of this repo (not the Actions "dist"
# artifact) — verify with: curl -o /dev/null -w '%{http_code}' \
#   https://harvestingmoon.github.io/src/data.js   -> 200 means branch root.
#
# Because of that, the repo-root index.html is the BUILT output, so a plain
# `vite build` would re-bundle that stale output instead of src/. The real Vite
# entry therefore lives in index.source.html and is copied into place here.
set -euo pipefail
cd "$(dirname "$0")"

[ -d node_modules ] || npm ci

cp index.source.html index.html                 # restore the Vite entry
node node_modules/vite/bin/vite.js build        # -> dist/
rm -rf assets
cp -R dist/assets assets                        # built JS/CSS into the repo root
cp dist/index.html index.html                   # built HTML into the repo root
cp dist/profile.png profile.png
[ -f "dist/Resume New.pdf" ] && cp "dist/Resume New.pdf" "Resume New.pdf"

echo "rebuilt: index.html, assets/ (papers/ and src/ are served as-is)"
