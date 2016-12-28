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

    handleSubmit = (e)=>
    {
        this.reset();
        const {onSubmit} = this.props; 
        if (onSubmit) {
            onSubmit(e);
        }
    }

    errorCallback= (json)=>{
        this.setState({
            message: json.errors[0].message,
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
       // Do not {...this.props} will assign unnecessary attribute to form
       return (
            <ReForm 
                callback={props.callback}
                className={props.className}
                errorCallback={this.errorCallback}
                messageType={messageType}
                method={props.method}
                onSubmit={this.handleSubmit}
                onKeyUp={this.handleKeyUp}
                path={props.path}
                refCb={dom=>this.form=dom}
                style={props.style}
                ui={props.ui}
            >
                {props.children}
                {thisMessage}
            </ReForm>
       );  
    }
}