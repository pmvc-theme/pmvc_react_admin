import React, { Component } from "react";
import { mixClass, reactStyle, Menu, SemanticUI } from "react-atomic-molecule";

const VerticalMenu = (props) => {
  const { style, ...otherProps } = props;
  const styles = reactStyle(
    {
      ...Styles.container,
      ...props.style,
    },
    false,
    false
  );
  return (
    <SemanticUI id="doc-menu" styles={styles}>
      <Menu
        styles={reactStyle(Styles.menu, false, false)}
        {...otherProps}
        className={mixClass("inverted vertical", props.className)}
      />
    </SemanticUI>
  );
};

export default VerticalMenu;

const Styles = {
  container: {
    backgroundColor: '#000',
    width: 0,
    position: "fixed",
    borderRadius: 0,
    left: 0,
    top: 0,
    bottom: 0,
    margin: 0,
    overflowY: "auto",
    transition: ["all 0.2s ease-out"],
  },
  menu: {
    paddingBottom: 25,
  },
};
