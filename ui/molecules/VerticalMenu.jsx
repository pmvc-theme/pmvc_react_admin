import React, {Component} from 'react'; 
import { reactStyle, Menu, Segment } from 'react-atomic-molecule'; 

const VerticalMen = (props) =>
<Menu 
    id="doc-menu"
    className="inverted vertical" 
    style={Styles.container}
    styles={reactStyle({
        transition: ['all 0.2s ease-out']
    },null,false)}
    {...props}
/>

export default VerticalMen;

const Styles = {
    container: {
        width: 0,
        position: 'fixed',
        height: '100%',
        borderRadius: 0,
        left: 0, 
        top: 0
    }
};

