import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CrudState from "../../Context/Crud/CrudState";
import ActDocumento from "./ActDocumento";
import ActDocumentoView from "./ActDocumentoView";
import ActEstado from "./ActEstado";
import ActFormaDepreciacion from "./ActFormaDepreciacion";
import ActGrupo from "./ActGrupo";
import ActGrupoView from "./ActGrupoView";
import { ActMaestro } from "./ActMaestro";
import ActMaestroView from "./ActMaestroView";
import ActMarca from "./ActMarca";
import ActSubGrupo from "./ActSubGrupo";
import ActSubGrupoView from "./ActSubGrupoView";
import ActTransaccion from "./ActTransaccion";
import ActTransaccionView from "./ActTransaccionView";
import store from "../../Store/Index";

export const ActIndex = () => {
  return (
    <Switch>
      <Provider store={store}>
        <Route path="/Dashboard/ActMaestro" component={ActMaestro}></Route>
        <Route exact path="/Dashboard/ActMarca" component={ActMarca}></Route>
        <Route
          exact
          path="/Dashboard/actindex/actmaestroview"
          component={ActMaestroView}
        ></Route>
        <Route
          exact
          path="/Dashboard/actindex/ActGrupoView"
          component={ActGrupoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/actindex/ActGrupo"
          component={ActGrupo}
        ></Route>
        <Route
          exact
          path="/Dashboard/ActSubGrupoView"
          component={ActSubGrupoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/ActSubGrupo/:isNew"
          component={ActSubGrupo}
        ></Route>
        <Route
          exact
          path="/Dashboard/ActFormaDepreciacion"
          component={ActFormaDepreciacion}
        ></Route>
        <Route exact path="/Dashboard/ActEstado" component={ActEstado}></Route>
        <Route
          exact
          path="/Dashboard/ActDocumentoView"
          component={ActDocumentoView}
        ></Route>
        <Route
          exact
          path="/Dashboard/ActDocumento/:isNew"
          component={ActDocumento}
        ></Route>
        <Route
          exact
          path="/Dashboard/ActTransaccionView"
          component={ActTransaccionView}
        ></Route>
        <Route
          exact
          path="/Dashboard/ActTransaccion/:isNew"
          component={ActTransaccion}
        ></Route>
      </Provider>
    </Switch>
  );
};
