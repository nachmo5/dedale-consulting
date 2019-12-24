import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuButton from "../../MenuButton";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MoreVert";
import logo from "../../../logo.jpg";
import t from "../../../common/i18n/fr";

const useStyles = makeStyles(theme => {
  return {
    link: theme.props.linkStyle,
    logo: {
      height: `calc(${theme.props.headerHeight} - 14px)`
    },
    separator: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: "20px"
    }
  };
});

const MenuBar = props => {
  const c = useStyles();
  return (
    <Toolbar>
      <Link className={c.link} to={"/"}>
        <img className={c.logo} src={logo} alt="Logo" />
      </Link>
      <div className={c.separator} />
      <MenuButton
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
      <MenuButton
        className={c.button}
        trigger={
          <IconButton
            edge="start"
            className={c.menuButton}
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        }
        options={[
          { label: t("home"), link: "/" },
          { label: t("contactUs"), link: "/contact" }
        ]}
      />
    </Toolbar>
  );
};

export default MenuBar;
