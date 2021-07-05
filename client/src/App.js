import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Routes from "./components/Routing/Routes";

//Context
import { AppContextProvider } from "./context/AppContextProvider";

import "./App.css";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Fragment>
          <Switch>
            {/* <Route exact path="/" component={} /> */}
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </AppContextProvider>
  );
};

export default App;
