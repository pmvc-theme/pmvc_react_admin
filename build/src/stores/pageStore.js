'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _utils = require('flux/utils');

var _dispatcher = require('../actions/dispatcher');

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageState = _immutable2.default.Map();

var PageStore = function (_ReduceStore) {
    _inherits(PageStore, _ReduceStore);

    function PageStore() {
        _classCallCheck(this, PageStore);

        return _possibleConstructorReturn(this, (PageStore.__proto__ || Object.getPrototypeOf(PageStore)).apply(this, arguments));
    }

    _createClass(PageStore, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return PageState;
        }
    }, {
        key: 'reduce',
        value: function reduce(state, action) {
            switch (action.type) {
                case 'config/set':
                    return state.merge(action.params);
                default:
                    return state;
            }
        }
    }]);

    return PageStore;
}(_utils.ReduceStore);

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.


var instance = new PageStore(_dispatcher2.default);
exports.default = instance;
module.exports = exports['default'];