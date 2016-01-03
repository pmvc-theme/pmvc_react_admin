import React, {Component} from 'react'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule'; 

class Nav extends Component
{
    render(){
       return (
            <SemanticUI>
                {this.props.children}
            </SemanticUI>
       );  
    }
}

export default Nav;
