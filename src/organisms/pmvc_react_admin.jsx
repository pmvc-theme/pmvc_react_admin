import React, {Component} from 'react'; 
import { AjaxPage } from 'react-organism-ajax';
import { dispatch } from '../actions/dispatcher';
import { PopupDom } from 'react-organism-popup'; 

class PMVCReactAdmin extends Component
{
    constructor(props) {
        super(props);
        this.update(this.props);
        this.state = {
            themePath: this.props.themePath,
            popup: null
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
            <div>
                <AjaxPage 
                    themes={this.props.themes}
                    themePath={this.state.themePath}
                    baseUrl={this.props.baseUrl}
                    callback={(json)=>{
                        self.update(json);
                        self.setState({
                            themePath: json.themePath    
                        });
                    }}
                />
                <PopupDom
                   popup={this.state.popup}
                   callback={(popup)=>{
                        self.setState({
                            popup: popup 
                        });
                   }}
                />
            </div>
        );
    }
}
export default PMVCReactAdmin;
