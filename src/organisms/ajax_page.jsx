import React, {Component} from 'react'; 
import {Container} from 'flux/utils';
import { 
    reactStyle, 
    Item, 
    SemanticUI 
    } from 'react-atomic-molecule';
import pageStore from '../stores/pageStore';
import ajaxStore from '../stores/ajaxStore';
import {dispatch} from '../actions/dispatcher';

class AjaxPage extends Component
{
    static getStores() {
        return [pageStore];
    }

    static calculateState(prevState) {
        let pageState = pageStore.getState();
        return {
           path: pageState.get('themePath')
        };
    }

    componentDidMount() {
        window.onpopstate = function (e) {
            let pageState = pageStore.getState();
            let url = document.URL;
            if (pageState.get('url')!==url) {
                dispatch({
                    type: 'ajax',
                    params: {
                        url: url 
                    }
                });
            }
        }
    }

    render() {
        return this.props.views[this.state.path];
    }
}

const AppContainer = Container.create(AjaxPage);
export default AppContainer;
