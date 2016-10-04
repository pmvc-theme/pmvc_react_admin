import React, {Component} from 'react'; 
import Home from './home';
import {Container} from 'flux/utils';
import PageStore from '../stores/pageStore';
import {dispatch} from '../actions/dispatcher';

class Index extends Component
{
    static getStores() {
        return [PageStore];
    }

    static calculateState(prevState) {
        let pageState = PageStore.getState();
        return {
           path: pageState.get('path')
        };
    }

    constructor(props) {
        super(props);
        dispatch({
            type: 'page/go',
            params: {
                path: this.props.path
            }
        });
    }

   render(){
        var views = {
            hello: <Home {...this.props}/>
        };
        var state = this.state;
        return (
            <div>
                {views[state.path]}
            </div>
        );  
    }
}

const AppContainer = Container.create(Index);
export default AppContainer;
