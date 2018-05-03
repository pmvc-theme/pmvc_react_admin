import React from 'react'; 
import { min, mixClass, mergeStyleConfig, lazyInject, Segment, SemanticUI } from 'react-atomic-molecule'; 
import get from 'get-object-value';

const keys = Object.keys;
let injects;

const getDocTemplate = (Styles, merge, params) =>
{
    const sideWidth = get(params, ['sideWidth'], 300);
    const miniSidebar = get(params, ['miniSidebar']);
    const miniSidebarWidth = get(params, ['miniSidebarWidth'], 42);
    let InjectStyles = {
        /*default*/
        defaultOnIcon: [
            {
                display: 'none !important',
            },
            '.ui.rail>.hamburger-icon.default-on'
        ],
        rail: [
            {
                minHeight: '100vh'
            },
            '.ui.rail.left'
        ],
        /*RWD*/
        mdContainer: [
            {
                margin: '0 0 0 '+sideWidth+'px !important',
            },
            [min.md, '#doc']
        ],
        mdMenu: [
            {
                width: sideWidth+'px !important'
            },
            [min.md, '#doc-menu']
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
                margin: '0 0 0 '+sideWidth+'px !important',
                overflow: 'hidden'
            },
            '.side-menu-active #doc'
        ],
        menuActive: [
            {
                width: sideWidth+'px !important',
            },
            '.active > #doc-menu'
        ],
        iconActive: [
            {
                left: (sideWidth+1) +'px !important'
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
                    margin: '0 0 0 '+miniSidebarWidth+'px !important',
                },
                [min.md, '.side-menu-inactive #doc']
            ],
            mdRailInactive: [
                {
                    maxWidth: miniSidebarWidth
                },
                [min.md, '#doc > .ui.rail.inactive']
            ],
            mdMenuInactive: [
                {
                    maxWidth: miniSidebarWidth
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
                    left: (sideWidth+1) +'px !important',
                    display: 'block !important'
                },
                [min.md, '.ui.rail>.hamburger-icon.default-on']
            ],
        };
    }
    if (merge) {
        mergeStyleConfig(Styles, defaultStyles, InjectStyles);
    }
    const DocTemplate = ({menu, body, footer, style, ...others}) => {
        injects = lazyInject( injects, InjectStyles );
        return (
            <Segment {...others} id="doc" style={{...Styles.container, ...style}}>
                {menu}
                <SemanticUI>
                    {body}
                    {footer}
                </SemanticUI>
            </Segment>
        );
    }

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
        minWidth: 300
    },
};

export {getDocTemplate};
export default getDocTemplate(defaultStyles);
