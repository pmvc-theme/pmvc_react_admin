import React from 'react'; 
import { mixClass, SemanticUI } from 'react-atomic-molecule';
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
            component={SemanticUI}
            className={classes}
            atom="a"
        />
    );  
}

Link.defaultProps = {
    item: true
};

export default Link;
