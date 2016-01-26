import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Message, 
    Button
} from 'react-atomic-molecule'; 
import AdminForm from "./form";
export default class FormButton extends Component
{
    render(){
       return (
            <AdminForm {...this.props}>
                <Button type="submit" {...this.props}>{this.props.buttonText}</Button>
                {this.props.children}
            </AdminForm>
       );  
    }
}

