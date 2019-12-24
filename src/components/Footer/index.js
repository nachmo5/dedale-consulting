import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import t from "../../common/i18n/fr";

const useStyles = makeStyles(theme => {
  return {
    container: {
      paddingTop: "20px",
      paddingBottom: "20px"
    },
    title: {
      color: theme.palette.primary.main
    },
    link: {
      ...theme.props.linkStyle,
      color: theme.palette.secondary.main
    },
    section: {
      color: theme.palette.secondary.main
    }
  };
});

const Footer = props => {
  const { background = "black" } = props;
  const c = useStyles();
  const spans = [3, 3, 4];
  return (
    <div className={c.root} style={{ background }}>
      <Grid container className={c.container} justify="center">
        <Grid item md={spans[0]}>
          <Typography variant="h6" className={c.title}>
            {t("productsAndServices")}
          </Typography>
          <Typography className={c.section}>
            <Link to="/services/consulting" className={c.link}>
              {t("consulting")}
            </Link>
          </Typography>
          <Typography className={c.section}>
            <Link to="/services/bi-bigdata" className={c.link}>
              {t("biBigData")}
            </Link>
          </Typography>
          <Typography className={c.section}>
            <Link to="/services/software" className={c.link}>
              {t("software")}
            </Link>
          </Typography>
          <Typography className={c.section}>
            <Link to="/services/mobile" className={c.link}>
              {t("mobile")}
            </Link>
          </Typography>
          <Typography className={c.section}>
            <Link to="/services/erp" className={c.link}>
              {t("erp")}
            </Link>
          </Typography>
        </Grid>
        <Grid item md={spans[1]}>
          <Typography variant="h6" className={c.title}>
            {t("joinUs")}
          </Typography>
          <Typography className={c.section}>{t("contactUs")}</Typography>
          <Typography className={c.section}>info@daleconsulting.com</Typography>
        </Grid>
        <Grid item md={spans[2]}>
          <Typography variant="h6" className={c.title}>
            {t("companyName")} {` - `} {t("aboutUs")}
          </Typography>
          <Typography paragraph>{t("aboutDescriptionP1")}</Typography>
          <Typography paragraph>{t("aboutDescriptionP2")}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
