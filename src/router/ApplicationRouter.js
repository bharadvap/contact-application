import React from "react";
import { Switch, Route, Router as ReactRouter } from "react-router-dom";
import history from "../history";
import ProtectedRoute from "./ProtectedRoute";

const ApplicationRouter = ({ routes }) => {
  return (
    <ReactRouter history={history}>
      <Switch>
        {routes.map(function (route, index) {
          return (
            <RouteWithSubRoutes
              key={index}
              isProtected={route.isProtected}
              fallbackRoute={route.fallbackRoute}
              {...route}
            />
          );
        })}
      </Switch>
    </ReactRouter>
  );
};

const RouteWithSubRoutes = ({ isProtected, fallbackRoute, ...route }) => {
  if (!isProtected) {
    return (
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    );
  }
  return <ProtectedRoute fallbackRoute={fallbackRoute} {...route} />;
};

export default ApplicationRouter;
