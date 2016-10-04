'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _two_columns = require('../templates/two_columns');

var _two_columns2 = _interopRequireDefault(_two_columns);

var _menu = require('../organisms/menu');

var _menu2 = _interopRequireDefault(_menu);

var _reactAtomicMolecule = require('react-atomic-molecule');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyMenu = function (_Component) {
    _inherits(MyMenu, _Component);

    function MyMenu() {
        _classCallCheck(this, MyMenu);

        return _possibleConstructorReturn(this, (MyMenu.__proto__ || Object.getPrototypeOf(MyMenu)).apply(this, arguments));
    }

    _createClass(MyMenu, [{
        key: 'render',
        value: function render() {
            return _jsx(_menu2.default, {}, void 0, _jsx(_reactAtomicMolecule.Item, {}, void 0, _jsx('a', {
                href: 'http://tw.yahoo.com'
            }, void 0, 'test1')), _jsx(_reactAtomicMolecule.Item, {}, void 0, 'test2'), _jsx(_reactAtomicMolecule.Item, {}, void 0, 'test3'));
        }
    }]);

    return MyMenu;
}(_react.Component);

var Home = function (_Component2) {
    _inherits(Home, _Component2);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var menu = _jsx(MyMenu, {});
            return _jsx(_two_columns2.default, {
                menu: menu,
                content: "I'm home for admin",
                brand: "brand",
                nav: "nav"
            });
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;
module.exports = exports['default'];