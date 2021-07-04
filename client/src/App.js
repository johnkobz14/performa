import { Fragment } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import { AppContextProvider } from "./context/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <Fragment>
        <Dashboard />
      </Fragment>
    </AppContextProvider>
  );
};

export default App;
