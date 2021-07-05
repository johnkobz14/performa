import React, { Fragment } from "react";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const NavBar = ({ AppBar, Typography, Toolbar, classes, user }) => {
  return (
    <Fragment>
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleRoundedIcon fontSize="large" className={classes.icon} />
          <Typography variant="h6">{user.name}</Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

NavBar.propTypes = {};

export default NavBar;
