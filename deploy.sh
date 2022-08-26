# !/bin/bash

set -e

yarn docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m '本地自动部署'
git push -f https://github.com/ibryang/blog.git master:gh-pages

cd -
rm -rf docs/.vitepress/dist
