let React=require('react');
let MyApp = React.createFactory(require('./pages/index.jsx'));
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  let ReactDOM = require('react-dom');
  window.app=MyApp;
  ReactDOM.render(new MyApp(REACT_DATA), document.getElementById('app'));
  window.ReactDOM=ReactDOM;
}else{
  global.app=MyApp;
}
