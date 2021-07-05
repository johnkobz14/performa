import React, { Fragment, useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";

// import NotFound from "../layout/NotFound";
import PrivateRoute from "../Routing/PrivateRoute";

import { nanoid } from "nanoid";

import useStyles from "../../styles";

const Routes = () => {
  return (
    <section>
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard"
          authenticated={true}
          loading={false}
          component={Dashboard}
        />
      </Switch>
    </section>
  );
};

export default Routes;
