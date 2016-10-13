import React, {Component} from 'react'; 
import ReactDOM from 'react-dom';
import { 
    reactStyle, 
    Message, 
    mixClass,
    Button
} from 'react-atomic-molecule'; 
import {ReForm} from 'reshow';

export default class AdminForm extends Component
{
    handleKeyUp(e)
    {
        const f =ReactDOM.findDOMNode(this.form);
        if(13===e.keyCode){
            console.log('submit');
            f.dispatchEvent(new Event("submit"));
        }
    }

    render()
    {
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
            <ReForm 
                path={this.props.path}
                callback={this.props.callback}
                errorCallback={this.props.errorCallback}
                message={this.props.error}
                method={this.props.method} 
                ui={this.props.ui}
                className={this.props.className}
                onSubmit={this.props.onSubmit}
                method={this.props.method}
                onKeyUp={this.handleKeyUp.bind(this)}
                ref={dom=>this.form=dom}
            >
                {this.props.children}
                {message}
            </ReForm>
       );  
    }
}
