import React from 'react'; 
import {
    reactStyle,
    Segment,
    Rail
} from 'react-atomic-molecule'; 
import Header from '../organisms/header'; 
import Doc from '../templates/DocTemplate'; 
const TwoColumnLayout = (props) =>( 
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
    </div>
);
TwoColumnLayout.defaultProps = {
    contentClassName: 'basic'
};

let Styles = {
    container: {
        margin: '0 10px 0 340px',
    }
};

export default TwoColumnLayout;
