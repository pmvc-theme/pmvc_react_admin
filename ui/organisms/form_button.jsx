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
       let topDom;
       let bottomDom;
       const {top, path, buttonText, ...props} = this.props;
       if (top) {
           topDom=this.props.children;
       } else {
           bottomDom=this.props.children;
       }
       return (
            <AdminForm {...this.props}>
                {topDom}
                <Button type="submit" {...props}>{buttonText}</Button>
                {bottomDom}
            </AdminForm>
       );  
    }
}
FormButton.defaultProps = {
    buttonText: 'Submit'
};
