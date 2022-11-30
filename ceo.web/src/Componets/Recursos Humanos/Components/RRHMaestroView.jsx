import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsRRHMaestro, routesRRHMaestroApi } from "../Interfaces/interfaceRRHMaestro";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHMaestroView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHMaestro}
        apiRoutes={routesRRHMaestroApi}
        field="NumeroEmpleado"
        title="Catálogo Maestro"
      />
    </div>
  );
};

export default RRHMaestroView;