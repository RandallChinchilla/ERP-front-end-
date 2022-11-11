import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import store from "../../../Store/Index";
import { Notification } from "../../CrossComponets/Notification";
import { routes } from "./routes";

export const RRHIndex = () => {
  return (
    <Switch>
      {/* <Provider store={store}> */}
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
      {/* </Provider> */}
    </Switch>
  );
};
