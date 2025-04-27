#!/bin/bash

# Set higher ulimit for file descriptors
ulimit -n 4096

# Change to website directory
cd website

# Set environment variables
export PORT=4000 

# Run dev server with the specified port
yarn dev 