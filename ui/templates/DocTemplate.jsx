import React from 'react'; 
import { min, mixClass, mergeStyleConfig, lazyInject, Segment, SemanticUI } from 'react-atomic-molecule'; 
import get from 'get-object-value';

const keys = Object.keys;
let injects;

const getDocTemplate = (Styles, merge, params) =>
{
    let sideWidth = get(params, ['sideWidth'], 300);
    if (!isNaN(sideWidth)) {
        sideWidth += 'px'
    }
    const miniSidebar = get(params, ['miniSidebar']);
    const miniSidebarWidth = get(params, ['miniSidebarWidth'], 42);
    const rightWidth = get(params, ['rightWidth'], 0);
    const containerClass = `width-${sideWidth}-${miniSidebarWidth}-${rightWidth}`;
    let InjectStyles = {
        /*default*/
        defaultOnIcon: [
            {
                display: 'none !important',
            },
            '.ui.rail>.hamburger-icon.default-on'
        ],
        defaultOnIconSvg: [
            {
                display: 'block',
            },
            '.ui.rail>.hamburger-icon svg'
        ],
        rail: [
            {
                minHeight: '100vh',
                width: 0,
                overflow: 'hidden'
            },
            '.ui.rail.left, #doc-menu'
        ],
        /*RWD*/
        mdContainer: [
            {
                padding: '0 '+ rightWidth+ 'px 0 '+sideWidth+' !important',
            },
            [min.md, '#doc']
        ],
        mdMenu: [
            {
                width: sideWidth+' !important'
            },
            [min.md, '.ui.rail.left, #doc-menu']
        ],
        mdIconDefaultOff: [
            {
                display: 'none !important'
            },
            [min.md, '.ui.rail>.hamburger-icon.default-off']
        ],

        /* Active */
        containerActive: [
            {
                padding: '0 '+ rightWidth+ 'px 0 '+sideWidth+' !important',
                overflow: 'hidden'
            },
            '.side-menu-active #doc'
        ],
        menuActive: [
            {
                width: sideWidth+' !important',
            },
            '.active.ui > #doc-menu, .active.ui.rail.left'
        ],
        iconActive: [
            {
                left: sideWidth+' !important'
            },
            '.active > #doc-menu ~ .hamburger-icon'
        ]
    };
    if (miniSidebar) {
        InjectStyles = {
            ...InjectStyles,
            /* RWD Inactive */
            mdContainerInactive: [
                {
                    padding: '0 0 0 '+miniSidebarWidth+'px !important',
                },
                [min.md, '.side-menu-inactive #doc']
            ],
            mdRailInactive: [
                {
                    maxWidth: miniSidebarWidth,
                },
                [min.md, '#doc > .ui.rail.inactive']
            ],
            mdMenuInactive: [
                {
                    maxWidth: miniSidebarWidth,
                    overflowY: 'visible !important'
                },
                [min.md, '#doc > .ui.rail.inactive #doc-menu']
            ],
            mdIconDefaultOnInactive: [
                {
                    left: (miniSidebarWidth+1) +'px !important'
                },
                [min.md, '.ui.rail.inactive>.hamburger-icon.default-on']
            ],
            mdIconDefaultOn: [
                {
                    left: sideWidth+ ' !important',
                    display: 'block !important'
                },
                [min.md, '.ui.rail>.hamburger-icon.default-on']
            ],
        };
    }
    if (merge) {
        mergeStyleConfig(Styles, defaultStyles, InjectStyles);
    }

    const DocTemplate = ({className, menu, right, body, footer, style, ...others}) => 
    {
        injects = lazyInject( injects, InjectStyles );
        return (
        <Segment {...others} id="doc" className={mixClass(className, containerClass)} style={{...Styles.container, ...style}}>
            <SemanticUI className="doc-body" style={Styles.docBody}>
                {body}
                {footer}
            </SemanticUI>
            {menu}
            {right}
        </Segment>
        );
    };

    DocTemplate.defaultProps = {
        className: 'basic'
    };

    return DocTemplate;
}

const defaultStyles = {
    container: {
        margin: 0,
        borderLeft: '1px solid #f5f5f5',
        padding: 0,
    },
    docBody: {
        minWidth: 350
    }
};

export {getDocTemplate};
export default getDocTemplate(defaultStyles);
