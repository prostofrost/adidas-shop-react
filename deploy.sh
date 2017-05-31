#!/usr/bin/env bash

npm i -g now
now ./build -t "$NOW_TOKEN" -p now ln
now ln -t "$NOW_TOKEN"