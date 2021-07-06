import React, { Fragment, useContext, useEffect } from "react";

import { UserContext } from "./../../context/UserProvider";

import {
  CssBaseline,
  CircularProgress,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import useStyles from "../../styles";

import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import Cycle from "../FrameWork/Cycle";

const Dashboard = () => {
  const classes = useStyles();

  const { user, loading, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser("jkobayashi@ataway.com");
    localStorage.setItem("user", JSON.stringify(user));
  }, [getUser, loading]);

  return (
    <Fragment>
      {loading ? (
        <CircularProgress />
      ) : (
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
              <Cycle classes={classes} user={user} />
            </div>
          </main>
          <Footer Typography={Typography} classes={classes} />
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
