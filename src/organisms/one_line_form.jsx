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
                <Field fieldClassName="inline" label={this.props.label}>
                    {this.props.children}
                    <Button type="submit">{this.props.buttonText}</Button>
                </Field>
            </AdminForm>
       );  
    }
}
OneLineForm.defaultProps = {
    buttonText: 'Submit'
};
