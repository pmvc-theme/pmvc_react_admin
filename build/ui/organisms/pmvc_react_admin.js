'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOrganismAjax = require('react-organism-ajax');

var _dispatcher = require('../actions/dispatcher');

var _reactOrganismPopup = require('react-organism-popup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PMVCReactAdmin = function (_Component) {
    _inherits(PMVCReactAdmin, _Component);

    function PMVCReactAdmin(props) {
        _classCallCheck(this, PMVCReactAdmin);

        var _this = _possibleConstructorReturn(this, (PMVCReactAdmin.__proto__ || Object.getPrototypeOf(PMVCReactAdmin)).call(this, props));

        _this.update(_this.props);
        _this.state = {
            themePath: _this.props.themePath,
            popup: null
        };
        return _this;
    }

    _createClass(PMVCReactAdmin, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.update(nextProps);
        }
    }, {
        key: 'update',
        value: function update(params) {
            (0, _dispatcher.dispatch)({
                type: 'config/set',
                params: params
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            return _jsx('div', {}, void 0, _jsx(_reactOrganismAjax.AjaxPage, {
                themes: this.props.themes,
                themePath: this.state.themePath,
                baseUrl: this.props.baseUrl,
                callback: function callback(json) {
                    self.update(json);
                    self.setState({
                        themePath: json.themePath
                    });
                }
            }), _jsx(_reactOrganismPopup.PopupDom, {
                popup: this.state.popup,
                callback: function callback(popup) {
                    self.setState({
                        popup: popup
                    });
                }
            }));
        }
    }]);

    return PMVCReactAdmin;
}(_react.Component);

exports.default = PMVCReactAdmin;
module.exports = exports['default'];