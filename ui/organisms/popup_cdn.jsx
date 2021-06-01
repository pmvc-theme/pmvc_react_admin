import React from "react";
import { PopupHover } from "organism-react-popup";
import { CDN } from "react-atomic-organism";

const PopupCDN = (props) => (
  <PopupHover
    popup={<CDN {...props} cdn-w="500" cdn-h="500" className="large fluid" />}
  >
    <CDN {...props} />
  </PopupHover>
);

export default PopupCDN;
