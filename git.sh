#!/bin/bash
echo 'Push to origin master'
npm run build
git add.
git commit -m 'fix'
git push origin master --force