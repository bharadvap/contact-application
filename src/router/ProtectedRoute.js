/**
 * This component should contain logic to render route conditionally if the protected prop is
 * true in the routes list, if the user does not satisfy certain condition they will be
 * redirected to some default home or whatever the feature requests for.
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ fallbackRoute, ...route }) => {
  const user = window.localStorage.getItem("user");
  const validateRouteParams = (fallbackRoute) => {
    if (fallbackRoute && typeof fallbackRoute !== "string") {
      throw new Error(
        `${typeof fallbackRoute} is not an allowed type for fallbackRoute, it should be string only`
      );
    }
  };

  validateRouteParams(fallbackRoute);
  fallbackRoute = fallbackRoute || "/signIn";
  return (
    <Route
      render={(props) =>
        user ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect
            to={{
              pathname: fallbackRoute,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
