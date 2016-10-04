'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAtomicMolecule = require('react-atomic-molecule');

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTextarea = function (_Component) {
    _inherits(FormTextarea, _Component);

    function FormTextarea() {
        _classCallCheck(this, FormTextarea);

        return _possibleConstructorReturn(this, (FormTextarea.__proto__ || Object.getPrototypeOf(FormTextarea)).apply(this, arguments));
    }

    _createClass(FormTextarea, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var label = _props.label;
            var name = _props.name;
            var value = _props.value;
            var onChange = _props.onChange;
            var defaultValue = _props.defaultValue;
            var buttonText = _props.buttonText;

            var reset = _objectWithoutProperties(_props, ['label', 'name', 'value', 'onChange', 'defaultValue', 'buttonText']);

            return _react2.default.createElement(
                _form2.default,
                reset,
                this.props.children,
                _jsx(_reactAtomicMolecule.Field, {
                    atom: 'textarea',
                    label: label,
                    name: name,
                    value: value,
                    onChange: onChange,
                    defaultValue: defaultValue || null
                }),
                _jsx(_reactAtomicMolecule.Button, {
                    type: 'submit'
                }, void 0, buttonText)
            );
        }
    }]);

    return FormTextarea;
}(_react.Component);

exports.default = FormTextarea;
module.exports = exports['default'];