#!/usr/bin/env bash

npm i -g now
now ./build -t "$NOW_TOKEN" -p

# Grab deploy URL
deploy_url=$(
  now ./build -t "$NOW_TOKEN" -p ls build |
  awk '/ url/,EOF' |
  tail -n +2 |
  awk '{ print $1 }'
)

echo "deploy finish, let's make alias"
echo $deploy_url