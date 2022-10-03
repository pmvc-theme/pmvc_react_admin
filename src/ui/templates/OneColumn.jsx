//@ts-check

import { build } from "react-atomic-molecule";
import Header from "../organisms/header";

/**
 * @returns {React.ReactElement}
 */
const OneColumn = ({ brand, nav, content, children }) => (
  <div style={Styles.container}>
    <Header brand={brand} nav={nav} />
    <main style={Styles.main}>{build(content)()}</main>
    <footer>{children}</footer>
  </div>
);

export default OneColumn;

const Styles = {
  container: {
    display: "flex",
    flexFlow: "column",
    height: "100vh",
  },
  main: {
    flex: 2,
  },
};
