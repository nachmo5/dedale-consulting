import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    image: {
      width: "80%",
      height: "80%"
    }
  };
});

const CardBlock = props => {
  const { src } = props;
  const c = useStyles();
  return (
    <div className={c.root}>
      <img className={c.image} src={src} alt="" />
    </div>
  );
};

export default CardBlock;
