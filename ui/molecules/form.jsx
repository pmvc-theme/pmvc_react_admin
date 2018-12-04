import React, {PureComponent} from 'react';
import {
  reactStyle,
  Form,
  Message,
  mixClass,
  Button,
} from 'react-atomic-molecule';
import {AjaxForm, ajaxStore} from 'organism-react-ajax';
import get from 'get-object-value';

export default class AdminForm extends PureComponent {
  static defaultProps = {
    refCb: () => {},
  };

  state = {};

  handleKeyUp = e => {
    const f = this.form;
    if (13 === e.keyCode) {
      console.log('submit');
      f.dispatchEvent(new Event('submit'));
    }
  };

  callback = json => {
    const {message, messageType} = this.props;
    const callback = ajaxStore.getState().get('callback');
    this.setState({
      message: message || 'Success',
      messageType: messageType || 'success',
    });
  };

  errorCallback = json => {
    this.setState({
      message: get(json, ['data', 'errors', 0, 'message']),
      messageType: 'error',
    });
  };

  reset() {
    this.setState({message: null, messageType: null});
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {message, messageType} = nextProps;
    if (prevState.prevProps !== nextProps) {
      return {
        message,
        messageType,
        prevProps: nextProps,
      };
    } else {
      return {};
    }
  }

  render() {
    const {refCb, messageHeader, messageClassName, ...props} = this.props;
    const {message, messageType} = this.state;
    let thisMessage = null;
    if (message) {
      thisMessage = (
        <Message
          header={messageHeader}
          className={messageClassName}
          messageType={messageType}>
          {message}
        </Message>
      );
    }

    // Do not use {...this.props} will assign unnecessary attribute to form
    return (
      <AjaxForm
        component={Form}
        callback={props.callback || this.callback}
        className={props.className}
        errorCallback={this.errorCallback}
        messageType={messageType}
        method={props.method}
        onKeyUp={this.handleKeyUp}
        beforeSubmit={props.beforeSubmit}
        path={props.path}
        refCb={dom => {
          this.form = dom;
          refCb(dom);
        }}
        style={props.style}
        ui={props.ui}>
        {props.children}
        {thisMessage}
      </AjaxForm>
    );
  }
}
