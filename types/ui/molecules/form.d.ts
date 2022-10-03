export default class AdminForm extends PureComponent<any, any, any> {
    static defaultProps: {
        refCb: () => void;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        message: any;
        messageType: any;
        prevProps: any;
    } | {
        message?: undefined;
        messageType?: undefined;
        prevProps?: undefined;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {};
    handleKeyUp: (e: any) => void;
    callback: (json: any) => void;
    errorCallback: (json: any) => void;
    reset(): void;
    render(): JSX.Element;
    form: any;
}
import { PureComponent } from "react";
