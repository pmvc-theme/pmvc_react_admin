#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf
webpack
webpack --config webpack.node.js
