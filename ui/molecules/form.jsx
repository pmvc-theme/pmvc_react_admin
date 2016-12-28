import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Message, 
    mixClass,
    Button
} from 'react-atomic-molecule'; 
import {ReForm} from 'reshow';

export default class AdminForm extends Component
{
    handleKeyUp = (e)=>
    {
        const f = this.form;
        if(13===e.keyCode){
            console.log('submit');
            f.dispatchEvent(new Event("submit"));
        }
    }

    render()
    {
       const props = this.props;
       let message = null;
       if (props.message) {
            message =( 
                <Message 
                    header={props.messageHeader}
                    className={props.messageClassName}
                    messageType={props.messageType}
                >
                    {props.message}
                </Message>
            );
       }
       // Do not {...this.props} will assign unnecessary attribute to form
       return (
            <ReForm 
                path={props.path}
                callback={props.callback}
                errorCallback={props.errorCallback}
                messageType={props.messageType}
                method={props.method} 
                ui={props.ui}
                className={props.className}
                onSubmit={props.onSubmit}
                method={props.method}
                onKeyUp={this.handleKeyUp}
                refCb={dom=>this.form=dom}
            >
                {props.children}
                {message}
            </ReForm>
       );  
    }
}
