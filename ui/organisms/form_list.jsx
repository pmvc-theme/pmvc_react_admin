import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Button
} from 'react-atomic-molecule'; 
import {
    List
} from 'pmvc_react_list';
import AdminForm from "../molecules/form";

export default class FormList extends Component
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
                <Button type="submit" {...props}>{props.buttonText}</Button>
                {preview}
            </AdminForm>
       );  
    }
}
FormList.defaultProps = { label: 'Preview' };
