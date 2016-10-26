import React from 'react'; 
import { mixClass, Segment, Rail } from 'react-atomic-molecule'; 
const DocTemplate = (props) => { 
    const {menu, children, ...others} = props;
    return (
        <Segment {...others} style={Styles.container}>
            <Rail style={Styles.menu}>
                {menu}
            </Rail>
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
        margin: '0 10px 0 160px',
        paddingTop: 1,
    },
    menu: {
        width: '160px',
        paddingRight: 0,
        marginRight: 0
    }
};
