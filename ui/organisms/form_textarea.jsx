import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Field, 
    Button
} from 'react-atomic-molecule'; 
import AdminForm from "../molecules/form";
export default class FormTextarea extends Component
{
    render(){
       let {label, name, value, onChange, defaultValue, buttonText, ...reset} = this.props;
       return (
            <AdminForm {...reset}>
                {this.props.children}
                <Field atom="textarea" 
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    defaultValue={defaultValue || null}
                />
                <Button type="submit">{buttonText}</Button>
            </AdminForm>
       );  
    }
}

