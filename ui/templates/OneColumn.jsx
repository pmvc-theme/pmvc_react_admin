import React from 'react'; 
import Header from '../organisms/header'; 

const OneColumn = (props) =>
<div style={Styles.container}>
    <Header 
        brand={props.brand}
        nav={props.nav}
    />
    <main style={Styles.main}>
        {props.content}
    </main>
    <footer>
    {props.children}
    </footer>
</div>

export default OneColumn;

const Styles = {
    container: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
    },
    main: {
        flex: 2
    }
};
