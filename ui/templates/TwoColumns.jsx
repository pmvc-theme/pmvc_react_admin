import React from 'react'; 
import {
    reactStyle,
    Segment,
    Rail
} from 'react-atomic-molecule'; 

import Header from '../organisms/header'; 
import Doc from '../templates/DocTemplate'; 
const TwoColumns = (props) =>
{
    return ( 
        <div>
            <Header 
                brand={props.brand}
                nav={props.nav}
            />
            <Doc
                menu={props.menu}
                className={props.contentClassName}
            >
                {props.content}
            </Doc>
            {props.children}
        </div>
    );
}

export default TwoColumns;

const Styles = {
    container: {
        margin: '0 10px 0 340px',
    }
};

