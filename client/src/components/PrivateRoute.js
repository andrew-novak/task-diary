import React from "react";
import { Route, Redirect } from "react-router-dom";

import { BASE_URL } from "../constants/urls";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("idToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${BASE_URL}/login`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
