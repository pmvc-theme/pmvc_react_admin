'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _utils = require('flux/utils');

var _pageStore = require('../stores/pageStore');

var _pageStore2 = _interopRequireDefault(_pageStore);

var _dispatcher = require('../actions/dispatcher');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Component) {
    _inherits(Index, _Component);

    _createClass(Index, null, [{
        key: 'getStores',
        value: function getStores() {
            return [_pageStore2.default];
        }
    }, {
        key: 'calculateState',
        value: function calculateState(prevState) {
            var pageState = _pageStore2.default.getState();
            return {
                path: pageState.get('path')
            };
        }
    }]);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        (0, _dispatcher.dispatch)({
            type: 'page/go',
            params: {
                path: _this.props.path
            }
        });
        return _this;
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            var views = {
                hello: _react2.default.createElement(_home2.default, this.props)
            };
            var state = this.state;
            return _jsx('div', {}, void 0, views[state.path]);
        }
    }]);

    return Index;
}(_react.Component);

var AppContainer = _utils.Container.create(Index);
exports.default = AppContainer;
module.exports = exports['default'];