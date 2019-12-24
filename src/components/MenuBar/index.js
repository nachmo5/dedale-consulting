import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import MobileBar from "./Mobile";
import DesktopBar from "./Desktop";

const useStyles = makeStyles(theme => {
  return {
    root: {
      background: "white",
      height: theme.props.headerHeight
    }
  };
});

const MenuBar = props => {
  const c = useStyles();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateMediaWidth = () => setWindowWidth(window.innerWidth);
  window.addEventListener("resize", updateMediaWidth);
  useEffect(
    () => () => window.removeEventListener("resize", updateMediaWidth),
    []
  );
  return (
    <AppBar position="sticky" className={c.root}>
      {windowWidth > 960 ? <DesktopBar /> : <MobileBar />}
    </AppBar>
  );
};

export default MenuBar;
