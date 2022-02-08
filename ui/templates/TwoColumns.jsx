import React from "react";
import { build, Segment, Rail } from "react-atomic-molecule";
import { getDocTemplate } from "organism-react-navigation";

import Header from "../organisms/header";
const Doc = getDocTemplate({
  sideWidth: 160,
  active: true,
});
const TwoColumns = ({
  brand,
  content,
  contentClassName,
  children,
  menu,
  nav,
}) => {
  return (
    <div>
      <Header brand={brand} nav={nav} />
      <Doc
        menu={menu}
        className={contentClassName}
        body={<div style={Styles.body}>{build(content)()}</div>}
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
