#!/bin/bash

if npm ls >/dev/null; then
  echo Dependencies are fine
else
  exit 1 # Something is not good
fi
