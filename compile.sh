#!/bin/sh

CHK_PHP=$(which php 2>/dev/null)

if [ ! -z "$CHK_PHP" ]; then
  conf=`DUMP=cli php -r "include('config/config.php');"`
else
  conf='{'
  conf+='"assetsRoot":"./assets/",'
  conf+='"devPort": "'${hotPort:-8080}'"'
  conf+='}'
fi

echo $conf;
webpack='npm run webpack --'

production(){
    echo "Production Mode";
    npm run build
    NODE_ENV=production CONFIG=$conf $webpack 
    NODE_ENV=production CONFIG=$conf $webpack --config webpack.server.js
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf $webpack
    CONFIG=$conf $webpack --config webpack.server.js
}

killBy(){
    ps -eo pid,args | grep $1 | grep -v grep | awk '{print $1}' | xargs -I{} kill -9 {}
}

stop(){
    DIR="$( cd "$(dirname "$0")" ; pwd -P )"
    killBy ${DIR}/node_modules/.bin/babel 
    cat webpack.pid | xargs -I{} kill -9 {}
    npm run clean
}

watch(){
    echo "Watch Mode";
    npm run build:cjs:ui -- --watch &
    npm run build:cjs:src -- --watch &
    npm run build:es:ui -- --watch &
    npm run build:es:src -- --watch &
}


case "$1" in
  watch)
    stop
    watch 
    ;;
  stop)
    stop 
    ;;
  p)
    stop 
    production
    ;;
  *)
    stop 
    develop
    exit
esac

exit $?
