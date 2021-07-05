import React, { Fragment, useContext, useEffect } from "react";

import { UserContext } from "./../../context/UserProvider";

import {
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Container,
} from "@material-ui/core";

import useStyles from "../../styles";

import NavBar from "../Navigation/NavBar";
import Cycle from "./Cycle";
import Pillar from "./Pillar";

const Dashboard = () => {
  const classes = useStyles();

  const { user, loading, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser("jkobayashi@ataway.com");
  }, [getUser]);

  return (
    <Fragment>
      <CssBaseline />
      <NavBar
        AppBar={AppBar}
        Typography={Typography}
        Toolbar={Toolbar}
        classes={classes}
        user={user}
      />
      <main>
        <div className={classes.container}>
          <Cycle classes={classes} />
        </div>
        <div className={classes.container}>
          <Pillar classes={classes} />
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Performance Management
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="secondary"
          gutterBottom
        >
          2021 All Rights Reserved
        </Typography>
      </footer>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
