import React, {Component} from 'react'; 
import {  Menu, Segment } from 'react-atomic-molecule'; 

const VerticalMen = (props) =>
<Menu 
    className="inverted vertical" 
    style={Styles.container}
    {...props}
/>

export default VerticalMen;

const Styles = {
    container: {
        width: '160px',
        position: 'fixed',
        height: '100%',
        borderRadius: 0
    }
};

