import React, {Component} from 'react'; 
import { reactStyle, Menu, Segment } from 'react-atomic-molecule'; 

class MyMenu extends Component
{
    render(){
       return (
            <Menu 
                className="inverted vertical" 
                styles={Styles.container}>
                    {this.props.children}
            </Menu>
       );  
    }
}

let Styles = {
    container: reactStyle({
    })
};

export default MyMenu;
