import React from 'react'; 
import {
    reactStyle,
    Segment,
    Rail
} from 'react-atomic-molecule'; 

import Header from '../organisms/header'; 
import { getDocTemplate } from '../templates/DocTemplate'; 
const Doc = getDocTemplate({}, true, {
    sideWidth: 160
});
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
                body={<div style={Styles.body}>{props.content}</div>}
            />
        </div>
    );
}

export default TwoColumns;

const Styles = {
    body: {
        padding: 10
    }
};

