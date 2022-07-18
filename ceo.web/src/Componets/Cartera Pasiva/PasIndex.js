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
import { PasAportanteView } from "./PasAportanteView";
import { PasAportante } from "./PasAportante";
import PasTasaPlazo from "./PasTasaPlazo";
import PasTasaPlazoView from "./PasTasaPlazoView";
import PasAutorizado from "./PasAutorizado";
import PasAutorizadoView from "./PasAutorizadoView";

export const PasIndex = () => {
  return (
    <Switch>
      <Provider store={store}>
        <Route
          exact
          path="/Dashboard/pasindex/PasAportanteView"
          component={PasAportanteView}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasAportante"
          component={PasAportante}
        ></Route>
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
        <Route
          exact
          path="/Dashboard/pasindex/PasTasaPlazo/:isNew"
          component={PasTasaPlazo}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasTasaPlazoView"
          component={PasTasaPlazoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasAutorizado/:isNew"
          component={PasAutorizado}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasAutorizadoView"
          component={PasAutorizadoView}
        ></Route>
      </Provider>
    </Switch>
  );
};
