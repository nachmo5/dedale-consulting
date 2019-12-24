import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Carousel from "../../components/Carousel";
import CardBlock from "../../components/Block/Card";
import ImageBlock from "../../components/Block/Image";
import Footer from "../../components/Block/Footer";

import consultingImage from "../../common/images/manwriting.jpg";
import biBigDataImage from "../../common/images/bibigdata.png";
import software from "../../common/images/software.jpg";
import mobileImage from "../../common/images/mobile.jpeg";
import erpImage from "../../common/images/erp.jpg";

import t from "../../common/i18n/fr";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  evenBlock: {
    background: "#F5F5F5"
  },
  oddBlock: {
    background: "#ffffff"
  }
}));

const Home = props => {
  const c = useStyles();
  return (
    <Grid container className={c.root}>
      <Grid item xs={12} className={c.oddBlock}>
        <Carousel />
      </Grid>
      <Grid item xs={12} md={6} className={c.evenBlock}>
        <ImageBlock src={consultingImage} />
      </Grid>
      <Grid item xs={12} md={6} className={c.evenBlock}>
        <CardBlock
          title={t("consultingTitle")}
          subTitle={t("consultingSubTitle")}
          paragraphs={[t("consultingP1"), t("consultingP2"), t("consultingP3")]}
        />
      </Grid>
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
      <Grid item xs={12} md={6} className={c.evenBlock}>
        <ImageBlock src={software} />
      </Grid>
      <Grid item xs={12} md={6} className={c.evenBlock}>
        <CardBlock
          title={t("softwareTitle")}
          subTitle={t("softwareSubTitle")}
          paragraphs={[t("softwareP1"), t("softwareList")]}
        />
      </Grid>
      <Grid item xs={12} md={6} className={c.oddBlock}>
        <ImageBlock src={mobileImage} />
      </Grid>
      <Grid item xs={12} md={6} className={c.oddBlock}>
        <CardBlock
          title={t("mobileTitle")}
          subTitle={t("mobileSubTitle")}
          paragraphs={[t("mobileP1"), t("mobileList")]}
        />
      </Grid>
      <Grid item xs={12} md={6} className={c.evenBlock}>
        <ImageBlock src={erpImage} />
      </Grid>
      <Grid item xs={12} md={6} className={c.evenBlock}>
        <CardBlock
          title={t("erpTitle")}
          subTitle={t("erpSubTitle")}
          paragraphs={[t("erpP1"), t("mobileList"), t("erpP2")]}
        />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
