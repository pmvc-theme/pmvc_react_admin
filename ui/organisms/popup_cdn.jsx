import React from 'react'; 
import { PopupHover, PopupOverlay } from 'organism-react-popup'; 
import { 
    CDN
} from 'react-atomic-organism'; 

const PopupCDN = (props) => ( 
    <PopupHover
        popup={
            <PopupOverlay className="very wide">
                <CDN {...props} 
                    cdn-w="500" 
                    cdn-h="500"
                    className="large fluid"
                />
            </PopupOverlay>
        } 
    >
        <CDN {...props}/>
    </PopupHover>
);

export default PopupCDN;
