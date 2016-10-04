import React, {Component} from 'react'; 
import {  Menu, Segment } from 'react-atomic-molecule'; 

const DocMenu = (props) =>
<Menu 
    className="inverted vertical" 
    style={Styles.container}>
        {props.children}
</Menu>

const Styles = {
    container: {
        width: '160px',
    }
};

export default DocMenu;
