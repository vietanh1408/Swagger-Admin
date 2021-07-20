import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../hocs/ProtectedRoute";
import { routes } from "../routes";

const AdminRoute = () => {
  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.isProtected) {
          return (
            <ProtectedRoute
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        } else {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        }
      })}
    </Switch>
  );
};

export default AdminRoute;
