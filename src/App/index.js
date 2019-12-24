import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MenuBar from "../components/MenuBar";

import Home from "../pages/Home";
import Consulting from "../pages/Consulting";
import BiBigData from "../pages/BiBigData";
import Software from "../pages/Software";
import Mobile from "../pages/Mobile";
import Erp from "../pages/Erp";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#004C9A" },
    secondary: { main: "#017DC3" }
  },
  props: {
    headerHeight: "64px",
    appBg: "#fff",
    linkStyle: {
      color: "inherit",
      width: "100%",
      textDecoration: "none",
      "&:focus, &:hover, &:visited, &:link, &:active": {
        textDecoration: "none"
      }
    }
  }
});

const App = props => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <MenuBar />
          <Switch>
            <Route path="/services/consulting">
              <Consulting />
            </Route>
            <Route path="/services/bi-bigdata">
              <BiBigData />
            </Route>
            <Route path="/services/software">
              <Software />
            </Route>
            <Route path="/services/mobile">
              <Mobile />
            </Route>
            <Route path="/services/erp">
              <Erp />
            </Route>
            <Route path="/contact">
              <div>Under construction</div>
            </Route>
            <Route path="/about">
              <div>Under construction</div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
