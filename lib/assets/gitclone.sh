#!/bin/bash

cd /Users/achan/desktop

if [ $# -eq 0 ]; then
git clone https://github.com/electron/electron-quick-start
else
git clone https://github.com/electron/electron-quick-start $1
fi
