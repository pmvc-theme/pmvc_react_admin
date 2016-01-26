import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Message, 
    Button
} from 'react-atomic-molecule'; 
import AdminForm from "./form";
export default class FormTextarea extends Component
{
    render(){
       return (
            <AdminForm {...this.props}>
                {this.props.children}
                <Field atom="textarea" {...this.props} children={null}/>
                <Button type="submit">{this.props.buttonText}</Button>
            </AdminForm>
       );  
    }
}

