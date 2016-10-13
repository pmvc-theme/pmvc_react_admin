'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAtomicMolecule = require('react-atomic-molecule');

var _header = require('../organisms/header');

var _header2 = _interopRequireDefault(_header);

var _DocTemplate = require('../templates/DocTemplate');

var _DocTemplate2 = _interopRequireDefault(_DocTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwoColumnLayout = function TwoColumnLayout(props) {
    return _jsx('div', {}, void 0, _jsx(_header2.default, {
        brand: props.brand,
        nav: props.nav
    }), _jsx(_DocTemplate2.default, {
        menu: props.menu,
        className: props.contentClassName
    }, void 0, props.content));
};
TwoColumnLayout.defaultProps = {
    contentClassName: 'basic'
};

var Styles = {
    container: {
        margin: '0 10px 0 340px'
    }
};

exports.default = TwoColumnLayout;
module.exports = exports['default'];