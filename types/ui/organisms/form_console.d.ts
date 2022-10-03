declare class FormPreview extends Component<any, any, any> {
    constructor(props: any);
    state: {
        preview: string;
        selected: string;
        width: string;
    };
    render(): JSX.Element;
    form: AdminForm;
}
declare namespace FormPreview {
    namespace defaultProps {
        const label: string;
    }
}
export default FormPreview;
import { Component } from "react";
import AdminForm from "../molecules/form";
