import React from "react";
import { SemanticUI } from "react-atomic-molecule";
const Copyright = ({year, ...others}) => {
  return (
    <SemanticUI {...others}>&#169;{year}</SemanticUI>
  );
};

export default Copyright;
