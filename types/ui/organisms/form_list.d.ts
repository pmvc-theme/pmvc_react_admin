declare class FormList extends Component<any, any, any> {
    constructor(props: any);
    state: {
        preview: string;
    };
    render(): JSX.Element;
}
declare namespace FormList {
    namespace defaultProps {
        const label: string;
    }
}
export default FormList;
import { Component } from "react";
