import React from "react";
import { Route, Redirect } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

const PrivateRoute = ({
  component: Component,
  authenticated,
  loading,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <CircularProgress />
      ) : authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {};

export default PrivateRoute;
