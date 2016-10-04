import React from 'react'; 
import { Segment, Rail } from 'react-atomic-molecule'; 
const DocTemplate = (props) => 
<Segment style={Styles.container}>
    <Rail style={Styles.menu}>
        {props.menu}
    </Rail>
    {props.children}
</Segment>

export default DocTemplate;

const Styles = {
    container: {
        margin: '0 10px 0 160px',
    },
    menu: {
        width: '160px',
        paddingRight: 0,
        marginRight: 0
    }
};
