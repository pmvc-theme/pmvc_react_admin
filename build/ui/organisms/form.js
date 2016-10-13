'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAtomicMolecule = require('react-atomic-molecule');

var _reshow = require('reshow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminForm = function (_Component) {
    _inherits(AdminForm, _Component);

    function AdminForm() {
        _classCallCheck(this, AdminForm);

        return _possibleConstructorReturn(this, (AdminForm.__proto__ || Object.getPrototypeOf(AdminForm)).apply(this, arguments));
    }

    _createClass(AdminForm, [{
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {
            var f = _reactDom2.default.findDOMNode(this.form);
            if (13 === e.keyCode) {
                console.log('submit');
                f.dispatchEvent(new Event("submit"));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this,
                _React$createElement;

            var message = null;
            if (this.props.message) {
                message = _jsx(_reactAtomicMolecule.Message, {
                    header: this.props.messageHeader,
                    className: this.props.messageClassName,
                    type: this.props.error
                }, void 0, this.props.message);
            }
            // Do not {...this.props} will assign unnecessary attribute to form
            return _react2.default.createElement(
                _reshow.ReForm,
                (_React$createElement = {
                    path: this.props.path,
                    callback: this.props.callback,
                    errorCallback: this.props.errorCallback,
                    message: this.props.error,
                    method: this.props.method,
                    ui: this.props.ui,
                    className: this.props.className,
                    onSubmit: this.props.onSubmit
                }, _defineProperty(_React$createElement, 'method', this.props.method), _defineProperty(_React$createElement, 'onKeyUp', this.handleKeyUp.bind(this)), _defineProperty(_React$createElement, 'ref', function ref(dom) {
                    return _this2.form = dom;
                }), _React$createElement),
                this.props.children,
                message
            );
        }
    }]);

    return AdminForm;
}(_react.Component);

exports.default = AdminForm;
module.exports = exports['default'];