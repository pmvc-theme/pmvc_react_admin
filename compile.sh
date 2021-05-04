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


case "$1" in
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
