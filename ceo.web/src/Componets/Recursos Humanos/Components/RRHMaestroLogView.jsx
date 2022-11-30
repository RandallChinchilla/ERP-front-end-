import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsRRHMaestroLog, routesRRHMaestroLogApi } from "../Interfaces/interfaceRRHMaestroLog";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHMaestroLogView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHMaestroLog}
        apiRoutes={routesRRHMaestroLogApi}
        field="NumeroEmpleado"
        title="Catálogo Maestro Log"
      />
    </div>
  );
};

export default RRHMaestroLogView;