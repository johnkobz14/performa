import React from "react";
import { Switch } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Pillar from "../FrameWork/Pillar";
import Competency from "../FrameWork/Competency";
import SubCompetency from "../FrameWork/SubCompetency";

// import NotFound from "../layout/NotFound";
import PrivateRoute from "../Routing/PrivateRoute";

import { nanoid } from "nanoid";

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
          key={nanoid()}
        />
        <PrivateRoute
          exact
          path="/pillar"
          authenticated={true}
          loading={false}
          component={Pillar}
          key={nanoid()}
        />
        <PrivateRoute
          exact
          path="/competency/:id"
          authenticated={true}
          loading={false}
          component={Competency}
          key={nanoid()}
        />
        <PrivateRoute
          exact
          path="/subcompetency/:id"
          authenticated={true}
          loading={false}
          component={SubCompetency}
          key={nanoid()}
        />
      </Switch>
    </section>
  );
};

export default Routes;
