import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardBlock from "../../components/Block/Card";
import ImageBlock from "../../components/Block/Image";
import Footer from "../../components/Block/Footer";
import biBigDataImage from "../../common/images/bibigdata.png";

import t from "../../common/i18n/fr";

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: "100%",
      background: theme.props.appBg
    }
  };
});

const MyCarousel = props => {
  const c = useStyles();
  return (
    <Grid container className={c.root}>
      <Grid item xs={12} md={6} className={c.oddBlock}>
        <ImageBlock src={biBigDataImage} />
      </Grid>
      <Grid item xs={12} md={6} className={c.oddBlock}>
        <CardBlock
          title={t("biBigDataTitle")}
          subTitle={t("biBigDataSubTitle")}
          paragraphs={[t("biBigDataP1"), t("biBigDataP2"), t("biBigDataList")]}
        />
      </Grid>
      <Grid item xs={12} className={c.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default MyCarousel;
