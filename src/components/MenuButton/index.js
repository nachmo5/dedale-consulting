import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => {
  return {
    link: theme.props.linkStyle,
    item: {
      color: theme.palette.secondary.main,
      width: "200px",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "white"
      }
    }
  };
});

const MenuButton = props => {
  const { options, trigger, withHover = false } = props;
  const c = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Trigger = React.cloneElement(trigger, {
    "aria-controls": "menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    onMouseEnter: withHover ? handleClick : f => f
  });
  return (
    <Fragment>
      {Trigger}
      <Menu
        id="menu"
        className={c.menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        autoFocus={false}
      >
        {options.map(option => (
          <MenuItem key={option.label} className={c.item}>
            {option.link ? (
              <Link className={c.link} to={option.link}>
                {option.label}
              </Link>
            ) : (
              option.label
            )}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default MenuButton;
