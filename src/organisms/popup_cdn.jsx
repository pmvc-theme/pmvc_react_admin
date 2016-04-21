import React, {Component} from 'react'; 
import { PopupHandler, PopupOverlay } from 'react-organism-popup'; 
import { 
    CDN
} from 'react-atomic-organism'; 

export default class PopupCDN extends Component
{
    render(){
       return (
            <PopupHandler
                popup={
                    <PopupOverlay className="very wide">
                        <CDN {...this.props} 
                            cdn-w="500" 
                            cdn-h="500"
                            className="large fluid"
                        />
                    </PopupOverlay>
                } 
            >
                <CDN {...this.props}/>
            </PopupHandler>
       );  
    }
}
