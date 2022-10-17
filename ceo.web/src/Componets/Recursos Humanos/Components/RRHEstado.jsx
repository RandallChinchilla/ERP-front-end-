import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsRRHEstado, routesRRHEstadoApi } from "../Interfaces/interfaceRRHEstado";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHEstado = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsRRHEstado}
        apiRoutes={routesRRHEstadoApi}
        field="CodigoEstado"
        title="Catálogo Estado"
      />
    </div>
  );
};

export default RRHEstado;