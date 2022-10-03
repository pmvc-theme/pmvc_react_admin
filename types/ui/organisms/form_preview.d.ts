export default FormPreview;
declare class FormPreview extends Component<any, any, any> {
    static defaultProps: {
        label: string;
    };
    constructor(props: any);
    state: {
        preview: string;
    };
    render(): JSX.Element;
}
import { Component } from "react";
