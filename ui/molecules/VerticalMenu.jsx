import React, {Component} from 'react'; 
import { mixClass, reactStyle, Menu, Segment } from 'react-atomic-molecule'; 

const VerticalMen = (props) =>
<Menu 
    id="doc-menu"
    style={Styles.container}
    styles={reactStyle({
        transition: ['all 0.2s ease-out']
    },null,false)}
    {...props}
    className={mixClass("inverted vertical", props.className)} 
/>

export default VerticalMen;

const Styles = {
    container: {
        width: 0,
        position: 'fixed',
        borderRadius: 0,
        left: 0, 
        top: 0,
        bottom:0,
        margin: 0
    }
};

