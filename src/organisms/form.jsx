import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Message, 
    mixClass,
    Button
} from 'react-atomic-molecule'; 
import {AjaxForm} from 'react-organism-ajax';

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
            <AjaxForm 
                path={this.props.path}
                callback={this.props.callback}
                errorCallback={this.props.errorCallback}
                error={this.props.error}
                method={this.props.method}
            >
                {this.props.children}
                {message}
            </AjaxForm>
       );  
    }
}
