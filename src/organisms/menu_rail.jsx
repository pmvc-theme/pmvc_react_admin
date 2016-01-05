import React, {Component} from 'react'; 
import { reactStyle, Rail, Segment } from 'react-atomic-molecule'; 

class MenuRail extends Component
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

export default MenuRail;
