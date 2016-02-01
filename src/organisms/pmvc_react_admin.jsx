import React, {Component} from 'react'; 
import {AjaxPage} from 'react-organism-ajax';
import {dispatch} from '../actions/dispatcher';

class PMVCReactAdmin extends Component
{
    constructor(props) {
        super(props);
        this.update(this.props);
        this.state = {
            themePath: this.props.themePath
        };
    }

    update(params){
        dispatch({
            type: 'config/set',
            params: params 
        });
    }

    render(){
        let self = this;
        return (
            <AjaxPage 
                themes={this.props.themes}
                themePath={this.state.themePath}
                baseUrl={this.props.baseUrl}
                callBack={function(json){
                    self.update(json);
                    self.setState({
                        themePath: json.themePath    
                    });
                }}
            />
        );
    }
}
export default PMVCReactAdmin;
