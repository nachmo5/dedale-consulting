import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Image from "../../components/Image";

const useStyles = makeStyles(theme => {
  return {
    root: {
      border: "1px solid black"
    },
    leftCol: {
      background: "#eaf"
    },
    rightCol: {
      background: "#efa"
    },
    imageContainer: {
      height: "100%",
      background: "blue"
    }
  };
});

const Section = props => {
  const c = useStyles();
  return (
    <div className={c.root}>
      <Grid container>
        <Grid item xs={12} xs={12} md={6} className={c.leftCol}>
          <div className={c.cardContainer}>
            i am a card <br /> yes
          </div>
        </Grid>
        <Grid item xs={12} xs={12} md={6} className={c.rightCol}>
          <div className={c.imageContainer}>i am a image</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;
