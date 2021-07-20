import React from "react";
import { Redirect, Route } from "react-router";
import { user } from "../App";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
