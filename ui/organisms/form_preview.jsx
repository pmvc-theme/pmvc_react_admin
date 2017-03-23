import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Button
} from 'react-atomic-molecule'; 
import {FormattedJson} from 'react-atomic-organism';

import FormButton from "../organisms/form_button";

class FormPreview extends Component
{

   static defaultProps = {
        label: 'Preview'
   };

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
       const {children, ...others} = this.props;
       const callback = (json) => {
            if (json) {
                this.setState({preview:json});
            }
       }
       return (
            <div>
            <FormButton callback={callback} {...others}>
                {children}
            </FormButton>
            {preview}
            </div>
       );  
    }
}

export default FormPreview;
