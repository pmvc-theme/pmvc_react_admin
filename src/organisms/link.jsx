import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Item, 
    SemanticUI 
    } from 'react-atomic-molecule';
import {AjaxLink} from 'react-molecule-ajax';

class Link extends Component
{
    render() {
        return (
            <Item>
                <AjaxLink {...this.props}>{this.props.children}</AjaxLink>
            </Item>
        );  
    }
}

export default Link;
