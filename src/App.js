import React from "react";
import "./scss/index.scss";
import { Switch, Route } from "react-router-dom";
import { Admin } from "./areas/Admin";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Admin}></Route>
    </Switch>
  );
};

export const user = false;

export default App;
