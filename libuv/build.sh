#!/bin/sh

gcc main.c -o main \
  -luv \
  # build/Release/libuv.a \
  # -framework CoreFoundation \
  # -framework CoreServices
