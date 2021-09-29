#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git pull
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/lldenisll/care_frontend.git master:gh-pages
cd -