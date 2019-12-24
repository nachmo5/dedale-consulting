import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuButton from "../../MenuButton";
import t from "../../../common/i18n/fr";
import logo from "../../../logo.jpg";

const useStyles = makeStyles(theme => {
  return {
    button: { textTransform: "none" },
    separator: {
      flexGrow: 1
    },
    link: theme.props.linkStyle,
    logo: {
      height: `calc(${theme.props.headerHeight} - 14px)`
    }
  };
});

const DesktopBar = props => {
  const c = useStyles();
  return (
    <Toolbar>
      <img className={c.logo} src={logo} alt="Logo" />
      <div className={c.separator} />
      <Button className={c.button} size="large" color="primary">
        <Link className={c.link} to={"/"}>
          {t("home")}
        </Link>
      </Button>
      <MenuButton
        withHover
        trigger={
          <Button className={c.button} size="large" color="primary">
            {t("productsAndServices")}
            <ExpandMoreIcon />
          </Button>
        }
        options={[
          { label: t("consulting"), link: "/services/consulting" },
          { label: t("biBigData"), link: "/services/bi-bigdata" },
          { label: t("software"), link: "/services/software" },
          { label: t("mobile"), link: "/services/mobile" },
          { label: t("erp"), link: "/services/erp" }
        ]}
      />
      <Button className={c.button} size="large" color="primary">
        <Link className={c.link} to={"/contact"}>
          {t("contactUs")}
        </Link>
      </Button>
    </Toolbar>
  );
};

export default DesktopBar;
