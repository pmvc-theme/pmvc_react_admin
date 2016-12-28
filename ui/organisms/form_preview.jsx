import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Button
} from 'react-atomic-molecule'; 
import {FormattedJson} from 'react-atomic-organism';
import AdminForm from "../molecules/form";

export default class FormPreview extends Component
{
   constructor(props)
   {   
      super(props);
      this.state = { 
         preview: '', 
      };  
   }

    render(){
       let preview = null;
       if (this.state.preview) {
           preview = (<FormattedJson atom="div" indent={2} label={this.props.label}>{this.state.preview}</FormattedJson>);
       }               
       const props = this.props;
       return (
            <AdminForm 
                callback={((json)=>{
                    if (json) {
                        this.setState({preview:json});
                    }
                }).bind(this)}
                errorCallback={((json)=>{
                    this.setState({
                        message: json.errors[0].message,
                        messageType: 'error' 
                    });
                }).bind(this)}
                message={this.state.message}
                messageType={this.state.messageType}
                {...props}
            >
                <Button type="submit" {...this.props}>{this.props.buttonText}</Button>
                {preview}
            </AdminForm>
       );  
    }
}
FormPreview.defaultProps = { label: 'Preview' };
