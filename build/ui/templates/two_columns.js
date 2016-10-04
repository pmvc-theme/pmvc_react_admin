'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../organisms/header');

var _header2 = _interopRequireDefault(_header);

var _reactAtomicMolecule = require('react-atomic-molecule');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwoColumnLayout = function (_Component) {
    _inherits(TwoColumnLayout, _Component);

    function TwoColumnLayout() {
        _classCallCheck(this, TwoColumnLayout);

        return _possibleConstructorReturn(this, (TwoColumnLayout.__proto__ || Object.getPrototypeOf(TwoColumnLayout)).apply(this, arguments));
    }

    _createClass(TwoColumnLayout, [{
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _jsx(_header2.default, {
                brand: this.props.brand,
                nav: this.props.nav
            }), _jsx(_reactAtomicMolecule.Segment, {
                style: this.props.style,
                className: this.props.contentClassName,
                styles: [Styles.container, this.props.styles],
                styleOrder: 2
            }, void 0, _jsx(_reactAtomicMolecule.Rail, {}, void 0, this.props.menu), this.props.content));
        }
    }]);

    return TwoColumnLayout;
}(_react.Component);

var Styles = {
    container: (0, _reactAtomicMolecule.reactStyle)({
        margin: '0 10px 0 340px'
    })
};

exports.default = TwoColumnLayout;
module.exports = exports['default'];