import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Message, 
    Button
} from 'react-atomic-molecule'; 
import {AjaxForm} from 'react-molecule-ajax';
import mixClass from 'classnames';

export default class AdminForm extends Component
{
    render(){
       let message = null;
       if (this.props.message) {
            message =( 
                <Message 
                    header={this.props.messageHeader}
                    className={this.props.messageClassName}
                    error={this.props.error}
                >
                    {this.props.message}
                </Message>
            );
       }
       return (
            <AjaxForm path={this.props.path} callBack={this.props.callBack} error={this.props.error}>
                {this.props.children}
                {message}
            </AjaxForm>
       );  
    }
}
AdminForm.defaultProps = { buttonText: 'Submit' };