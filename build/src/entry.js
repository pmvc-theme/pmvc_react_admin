'use strict';

var React = require('react');
var MyApp = React.createFactory(require('./pages/index.jsx'));
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  var ReactDOM = require('react-dom');
  window.app = MyApp;
  ReactDOM.render(new MyApp(REACT_DATA), document.getElementById('app'));
} else {
  global.app = MyApp;
}