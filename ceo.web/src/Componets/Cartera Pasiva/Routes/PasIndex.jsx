import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "../../../Store/Index";
import { Notification } from "../../CrossComponets/Notification";
import { routes } from "./routes";

export const PasIndex = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          render={() => {
            return <route.component />;
          }}
        />
      ))}
      <Notification />
    </Switch>
  );
};
