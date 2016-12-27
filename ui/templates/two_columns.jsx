import React from 'react'; 
import {
    reactStyle,
    Segment,
    Rail
} from 'react-atomic-molecule'; 
import {
    PopupElement
} from 'organism-react-popup';

import Header from '../organisms/header'; 
import Doc from '../templates/DocTemplate'; 
const TwoColumnLayout = (props) =>
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
            <PopupElement />
            {props.children}
        </div>
    );
}

export default TwoColumnLayout;

const Styles = {
    container: {
        margin: '0 10px 0 340px',
    }
};

