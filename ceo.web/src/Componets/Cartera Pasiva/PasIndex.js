import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { PasInstrumento } from "./PasInstrumento";
import { PasInstrumentoView } from "./PasInstrumentoView";
import PasPortafolio from "./PasPortafolio";
import PasTipoInstrumento from "./PasTipoInstrumento";
import PasOrigenAportante from "./PasOrigenAportante";
import PasOrigenFondos from "./PasOrigenFondos";
import store from "../../Store/Index";
import { PasAportanteView } from "./PasAportanteView";
import { PasAportante } from "./PasAportante";
import { PasTasaPlazoView }from "./PasTasaPlazoView";
import {PasAutorizado} from "./PasAutorizado";
import {PasAutorizadoView} from "./PasAutorizadoView";
import { PasTasaPlazo } from "./PasTasaPlazo";
import { PasMaestroView } from "./PasMaestroView";
import { PasMaestro } from "./PasMaestro";

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
          path="/Dashboard/pasindex/PasInstrumento"
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
          path="/Dashboard/pasindex/PasTasaPlazo"
          component={PasTasaPlazo}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasTasaPlazoView"
          component={PasTasaPlazoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasAutorizado/"
          component={PasAutorizado}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasAutorizadoView"
          component={PasAutorizadoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasMaestroView"
          component={PasMaestroView}
        ></Route>
        <Route
          exact
          path="/Dashboard/pasindex/PasMaestro"
          component={PasMaestro}
        ></Route>
      </Provider>
    </Switch>
  );
};
