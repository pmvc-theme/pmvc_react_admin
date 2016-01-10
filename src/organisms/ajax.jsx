import React, {Component} from 'react'; 
import { 
    reactStyle, 
    Item, 
    SemanticUI 
    } from 'react-atomic-molecule';
import PageStore from '../stores/pageStore';
import {dispatch} from '../actions/dispatcher';

class Ajax extends Component
{

    handleOnClick(e) {
        e.preventDefault();
        let self = this;
        let href = e.currentTarget.href;
        let url = href.replace('index.php','json.php')+'?r='+((new Date()).getTime());
        require(['superagent'],function(req){ 
           req.get(url)
              .withCredentials()
              .end(function(res){
                    let json = JSON.parse(res.text);
                    dispatch({
                        type: 'config/set',
                        params: json
                    });
                    history.pushState('','',href);
               });
        });
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

export default Ajax;
