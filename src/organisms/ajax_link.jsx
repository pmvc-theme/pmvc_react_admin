import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Item, 
    SemanticUI 
    } from 'react-atomic-molecule';
import PageStore from '../stores/pageStore';
import {dispatch} from '../actions/dispatcher';

class AjaxLink extends Component
{

    handleOnClick(e) {
        e.preventDefault();
        let href = e.currentTarget.href;
        dispatch({
            type: 'ajax',
            params: {
                url: href
            }
        });
        history.pushState('','',href);
    }

    render() {
        let baseUrl = PageStore.getState().get('baseUrl');
        return (
            <Item {...this.props}>
                <SemanticUI
                    atom="a"
                    href={baseUrl+this.props.path}
                    onClick={this.handleOnClick.bind(this)}
                >
                    {this.props.children} 
                </SemanticUI>
            </Item>
        );  
    }


}

export default AjaxLink;
