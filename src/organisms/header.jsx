import React, {Component} from 'react'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule'; 
import Brand from './brand'; 
import Nav from './nav'; 

class Header extends Component
{
   render(){
       return (
            <SemanticUI styles={Styles.container}>
                <Brand>PMVC ADMIN</Brand>
                <Nav>I'm Nav</Nav>
            </SemanticUI>
       );  
    }
}

let Styles = {
    container: reactStyle({
        minHeight: '53px',
        borderTop: '2px solid #2baab1',
    })
};

export default Header;
