import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import PasInstrumento from "./PasInstrumento";
import PasInstrumentoView from "./PasInstrumentoView";
import PasPortafolio from "./PasPortafolio";
import PasTipoInstrumento from "./PasTipoInstrumento";
import PasOrigenAportante from "./PasOrigenAportante";
import PasOrigenFondos from "./PasOrigenFondos";
import store from "../../Store/Index";

export const PasIndex = () => {
  return (
    <Switch>
      <Provider store={store}>
        <Route
          exact
          path="/Dashboard/pasindex/PasPortafolio"
          component={PasPortafolio}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasTipoInstrumento"
          component={PasTipoInstrumento}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasInstrumento/:isNew"
          component={PasInstrumento}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasInstrumentoView"
          component={PasInstrumentoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasOrigenAportante"
          component={PasOrigenAportante}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasOrigenFondos"
          component={PasOrigenFondos}
        ></Route>
      </Provider>
    </Switch>
  );
};
