import React, {Component} from 'react'; 
import { 
    reactStyle, 
    mixClass
    } from 'react-atomic-molecule';
import {AjaxLink} from 'react-organism-ajax';

class Link extends Component
{
    
    render() {
        let classes = mixClass (
            this.props.className,
            'item'
        );
        return (
            <AjaxLink {...this.props} 
                className={classes}
            />
        );  
    }
}

export default Link;
