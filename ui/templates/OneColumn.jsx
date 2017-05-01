import React from 'react'; 
import Header from '../organisms/header'; 

const OneColumn = (props) =>
<div>
    <Header 
        brand={props.brand}
        nav={props.nav}
    />
    <div style={Styles.container}>
        {props.content}
    </div>
    {props.children}
</div>

export default OneColumn;

const Styles = {
    container: {
        padding: '0 5px',
        overflow: 'auto'
    }
};
