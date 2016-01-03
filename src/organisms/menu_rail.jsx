import React, {Component} from 'react'; 
import { reactStyle, Rail, Segment } from 'react-atomic-molecule'; 

class Menu extends Component
{
    render(){
       return (
            <Rail styles={Styles.container}>
                    {this.props.children}
            </Rail>
       );  
    }
}

let Styles = {
    container: reactStyle({
    })
};

export default Menu;
