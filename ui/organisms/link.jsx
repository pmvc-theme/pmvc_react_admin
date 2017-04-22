import React from 'react'; 
import { mixClass } from 'react-atomic-molecule';
import {ReLink} from 'reshow';

const Link = ({item, ...props}) => {
    let classes = mixClass (
        props.className,
        {
            item: item
        }
    );
    return (
        <ReLink {...props} 
            className={classes}
        />
    );  
}

Link.defaultProps = {
    item: true
};

export default Link;
