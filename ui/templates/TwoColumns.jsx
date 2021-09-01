import React from "react";
import { reactStyle, Segment, Rail } from "react-atomic-molecule";
import { getDocTemplate } from "organism-react-navigation";

import Header from "../organisms/header";
const Doc = getDocTemplate({
  sideWidth: 160,
  active: true,
});
const TwoColumns = (props) => {
  return (
    <div>
      <Header brand={props.brand} nav={props.nav} />
      <Doc
        menu={props.menu}
        className={props.contentClassName}
        body={<div style={Styles.body}>{props.content}</div>}
      />
    </div>
  );
};

export default TwoColumns;

const Styles = {
  body: {
    padding: 10,
  },
};
