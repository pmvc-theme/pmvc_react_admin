import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Message, 
    mixClass,
    Button
} from 'react-atomic-molecule'; 
import {AjaxForm, ajaxStore} from 'organism-react-ajax';
import get from 'get-object-value';

export default class AdminForm extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            message: props.message,
            messageType: props.messageType
        };
    } 

    componentWillReceiveProps(props)
    {
        this.setState({
            message: props.message,
            messageType: props.messageType
        });
    }

    handleKeyUp = (e)=>
    {
        const f = this.form;
        if(13===e.keyCode){
            console.log('submit');
            f.dispatchEvent(new Event("submit"));
        }
    }

    callback = (json) =>
    {
        let callback = ajaxStore.getState().get('callback');
        callback(json);
        this.setState({
            message: this.props.message || 'Success',
            messageType: this.props.messageType || 'success' 
        });
    }

    errorCallback= (json)=>{
        this.setState({
            message: get(json, ['data', 'errors', 0, 'message']),
            messageType: 'error' 
        });
    }

   reset()
   {
       this.setState({message:null,messageType:null});
   }

    render()
    {
       const props = this.props;
       const {message, messageType} = this.state;
       let thisMessage = null;
       if (message) {
            thisMessage =( 
                <Message 
                    header={props.messageHeader}
                    className={props.messageClassName}
                    messageType={messageType}
                >
                    {message}
                </Message>
            );
       }
       // Do not use {...this.props} will assign unnecessary attribute to form
       return (
            <AjaxForm 
                callback={props.callback || this.callback}
                className={props.className}
                errorCallback={this.errorCallback}
                messageType={messageType}
                method={props.method}
                onKeyUp={this.handleKeyUp}
                path={props.path}
                refCb={dom=>this.form=dom}
                style={props.style}
                ui={props.ui}
            >
                {props.children}
                {thisMessage}
            </AjaxForm>
       );  
    }
}
