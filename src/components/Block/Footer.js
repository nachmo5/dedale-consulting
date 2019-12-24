import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import t from "../../common/i18n/fr";

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: "100%",
      width: "100%",
      paddingTop: "20px",
      paddingBottom: "30px",
      background: "#EEEEEE"
    },
    section: {},
    titleContainer: {
      marginBottom: "10px"
    },
    title: {
      color: theme.palette.primary.main,
      textDecoration: "underline"
    },
    subTitle: {
      color: theme.palette.secondary.main
    },
    link: {
      ...theme.props.linkStyle,
      color: theme.palette.secondary.main
    },
    content: {
      color: "gray"
    }
  };
});

const CardBlock = props => {
  const c = useStyles();
  const mdSpans = [3, 3, 4];
  return (
    <Grid container className={c.root} justify="center">
      {/* ==================================================== */}
      <Grid item xs={12} md={mdSpans[0]}>
        <div className={c.section}>
          <div className={c.titleContainer}>
            <Typography variant="h6" className={c.title}>
              {t("productsAndServices")}
            </Typography>
          </div>
          <div className={c.content}>
            <Typography className={c.element}>
              <Link to="/services/consulting" className={c.link}>
                {t("consulting")}
              </Link>
            </Typography>
            <Typography className={c.element}>
              <Link to="/services/bi-bigdata" className={c.link}>
                {t("biBigData")}
              </Link>
            </Typography>
            <Typography className={c.element}>
              <Link to="/services/software" className={c.link}>
                {t("software")}
              </Link>
            </Typography>
            <Typography className={c.element}>
              <Link to="/services/mobile" className={c.link}>
                {t("mobile")}
              </Link>
            </Typography>
            <Typography className={c.element}>
              <Link to="/services/erp" className={c.link}>
                {t("erp")}
              </Link>
            </Typography>
          </div>
        </div>
      </Grid>
      {/* ==================================================== */}
      <Grid item xs={12} md={mdSpans[1]}>
        <div className={c.section}>
          <div className={c.titleContainer}>
            <Typography variant="h6" className={c.title}>
              {t("joinUs")}
            </Typography>
          </div>
          <div className={c.content}>
            <Typography>
              <Link to="/contact" className={c.link}>
                {t("contactUs")}
              </Link>
            </Typography>
            <Typography className={c.element}>
              info@daleconsulting.com
            </Typography>
          </div>
        </div>
      </Grid>
      {/* ==================================================== */}
      <Grid item xs={12} md={mdSpans[2]}>
        <div className={c.section}>
          <div className={c.titleContainer}>
            <Typography variant="h6" display="inline" className={c.title}>
              {t("companyName")}
            </Typography>
            <Typography variant="body1" className={c.subTitle} display="inline">
              {` - `}{" "}
              <Link to="/about" className={c.link}>
                {t("aboutUs")}
              </Link>
            </Typography>
          </div>
          <div className={c.content}>
            <Typography paragraph variant="body2" className={c.about}>
              {t("aboutDescriptionP1")}
            </Typography>
            <Typography paragraph variant="body2" className={c.about}>
              {t("aboutDescriptionP2")}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CardBlock;
