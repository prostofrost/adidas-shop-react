#!/usr/bin/env bash

npm i -g now
now -t "$NOW_TOKEN" -p
now ln -t "$NOW_TOKEN"