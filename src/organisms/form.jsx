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
                    type={this.props.error}
                >
                    {this.props.message}
                </Message>
            );
       }
       // Do not {...this.props} will assign unnecessary attribute to form
       return (
            <AjaxForm 
                path={this.props.path}
                callback={this.props.callback}
                errorCallback={this.props.errorCallback}
                error={this.props.error}
                method={this.props.method} 
                ui={this.props.ui}
                className={this.props.className}
                onSubmit={this.props.onSubmit}
                method={this.props.method}
            >
                {this.props.children}
                {message}
            </AjaxForm>
       );  
    }
}
