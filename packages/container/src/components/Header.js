// @ts-check

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

import useStyles from "./Header.styles";

/**
 * @returns {JSX.Element}
 */
const Header = ({ signedIn, onSignOut }) => {
  const classes = useStyles();

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            component={RouterLink}
            to='/'
          >
            App
          </Typography>

          <Button
            color='primary'
            variant='outlined'
            className={classes.link}
            component={RouterLink}
            to={signedIn ? "/" : "/auth/signin"}
            onClick={onClick}
          >
            {signedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  signedIn: PropTypes.bool,
  onSignOut: PropTypes.func,
};

export default Header;
