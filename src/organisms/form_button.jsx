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
       let top;
       let bottom;
       if (this.props.top) {
           top=this.props.children;
       } else {
           bottom=this.props.children;
       }
       return (
            <AdminForm {...this.props}>
                {top}
                <Button type="submit" {...this.props}>{this.props.buttonText}</Button>
                {bottom}
            </AdminForm>
       );  
    }
}
FormButton.defaultProps = {
    buttonText: 'Submit'
};
