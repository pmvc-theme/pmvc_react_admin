'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = undefined;

var _flux = require('flux');

var instance = new _flux.Dispatcher();
exports.default = instance;

// So we can conveniently do, `import {dispatch} from './TodoDispatcher';`

var dispatch = exports.dispatch = instance.dispatch.bind(instance);