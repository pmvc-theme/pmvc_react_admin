
//process.argv.forEach(function (val, index, arr) {
//  console.log(index + ': ' + val,arr);
//});

var ReactDOM = require('react-dom/server');
var args = process.argv.slice(2);
var myJson = JSON.parse(args.join(''));
var file = './assets/node.bundle.js'; 
require(file);
var MyApp = global.app;
var tmp = ReactDOM.renderToString(MyApp(
    myJson 
));
console.log('<!--start-->'+tmp);
