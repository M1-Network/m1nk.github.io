#!/bin/bash
echo 'Push to origin master'
npm run build
git push origin master --force