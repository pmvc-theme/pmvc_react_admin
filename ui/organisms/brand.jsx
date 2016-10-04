import React, {Component} from 'react'; 
import { reactStyle, SemanticUI } from 'react-atomic-molecule'; 

class Brand extends Component
{
    render(){
       return (
            <SemanticUI styles={Styles.container}>
                {this.props.children}
            </SemanticUI>
       );  
    }
}

let Styles = {
    container: reactStyle({
        float: 'left',
        width: '340px',
        height: '52px',
        lineHeight: '52px',
        textAlign: 'center'
    })
};

export default Brand;
