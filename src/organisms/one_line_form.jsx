import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Message, 
    Button
} from 'react-atomic-molecule'; 
import AdminForm from "./form";
export default class OneLineForm extends Component
{
    render(){
       return (
            <AdminForm {...this.props}>
                <Field className="inline">
                    {this.props.children}
                    <Button type="submit" {...this.props}>{this.props.buttonText}</Button>
                </Field>
            </AdminForm>
       );  
    }
}
OneLineForm.defaultProps = {
    buttonText: 'Submit'
};
