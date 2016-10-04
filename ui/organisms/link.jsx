import React from 'react'; 
import { mixClass } from 'react-atomic-molecule';
import {ReLink} from 'reshow';

const Link = (props) => {
    let classes = mixClass (
        this.props.className,
        'item'
    );
    return (
        <ReLink {...this.props} 
            className={classes}
        />
    );  
}

export default Link;
