#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf

phpc=`DUMP=cli php -r "include('config/config.php');"`

production(){
    echo "Production Mode";
    NODE_ENV=production PHP_CONFIG=$phpc webpack -p 
    NODE_ENV=production webpack -p --config webpack.node.js
}

develop(){
    echo "Develop Mode";
    npm run build
    #PHP_CONFIG=$phpc webpack
    #webpack --config webpack.node.js
}

build(){
    rm -rf build
    BABEL_ENV=build babel ui -d build/ui
    BABEL_ENV=build babel src -d build/src
    mv build/src/list.js ./
}

case "$1" in
  build)
    build 
    ;;
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
