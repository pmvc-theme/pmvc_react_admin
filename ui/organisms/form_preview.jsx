import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Message, 
    Button
} from 'react-atomic-molecule'; 
import {FormattedJson} from 'react-atomic-organism';
import AdminForm from "./form";
export default class FormPreview extends Component
{
   constructor(props)
   {   
      super(props);
      this.state = { 
         preview: '', 
      };  
   }

    reset()
    {
    }

    render(){
       let preview = null;
       if (this.state.preview) {
           preview = (<FormattedJson atom="div" indent={2} label={this.props.label}>{this.state.preview}</FormattedJson>);
       }               
       return (
            <AdminForm callback={((json)=>{
                if (json) {
                    this.setState({preview:json});
                }
                if (json.errors) {
                    this.setState({
                        message: json.errors[0].message,
                        error: 'error' 
                    });
                } else {
                    this.reset();
                }
            }).bind(this)} {...this.props} children={null}>
                <Button type="submit" {...this.props}>{this.props.buttonText}</Button>
                {preview}
            </AdminForm>
       );  
    }
}
FormPreview.defaultProps = { label: 'Preview' };
