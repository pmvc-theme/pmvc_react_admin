import React from 'react'; 
import { min, mixClass, lazyInject, Segment } from 'react-atomic-molecule'; 
const DocTemplate = (props) => { 
    const {menu, children, ...others} = props;
    return (
        <Segment {...others} id="doc" style={Styles.container}>
            {menu}
            {children}
        </Segment>
    );
}

DocTemplate.defaultProps = {
    className: 'basic'
};

export default DocTemplate;

const Styles = {
    container: {
        margin: '34px 0 0',
        padding: 0 
    }
};

const InjectStyles = {
    container: [
        {
            margin: '0 10px 0 160px !important',
        },
        [min.md, '#doc']
    ],
    menu: [
        {
            width: '160px !important'
        },
        [min.md, '#doc-menu']
    ],
    icon: [
        {
            display: 'none !important'
        },
        [min.md, '#doc-menu+.hamburger-icon']
    ],
    containerActive: [
        {
            margin: '34px 10px 0 160px !important',
        },
        '.side-menu-active #doc'
    ],
    menuActive: [
        {
            width: '160px !important'
        },
        '.side-menu-active #doc-menu'
    ],
    iconActive: [
        {
            left: '160px !important'
        },
        '.side-menu-active #doc-menu+.hamburger-icon'
    ]
};
let injects = lazyInject (
    injects,
    InjectStyles
);
