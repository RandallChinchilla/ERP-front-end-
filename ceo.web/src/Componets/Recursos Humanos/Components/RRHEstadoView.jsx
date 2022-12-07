import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHEstado,
  routesRRHEstadoApi,
  typeMode,
} from "../Interfaces/interfaceRRHEstado";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHEstadoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHEstado}
        apiRoutes={routesRRHEstadoApi}
        field="CodigoEstado"
        title="Catálogo Estado"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHEstadoView;
