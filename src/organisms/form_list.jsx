import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Message, 
    Button
} from 'react-atomic-molecule'; 
import {
    List
} from 'pmvc_react_list';
import AdminForm from "./form";
export default class FormList extends Component
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
       let props = this.props;
       if (this.state.preview) {
           preview = (
            <List 
             rows={this.state.preview} 
             colsLocator={props.colsLocator}
             rowsLocator={props.rowsLocator}
            />
           );
       } 
       return (
            <AdminForm callBack={(json)=>{
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
            }.bind(this)} {...props} children={null}>
                <Button type="submit" {...props}>{props.buttonText}</Button>
                {preview}
            </AdminForm>
       );  
    }
}
FormList.defaultProps = { label: 'Preview' };
