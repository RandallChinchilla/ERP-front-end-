import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHDeduccionEmpleado,
  routesRRHDeduccionEmpleadoApi,
  typeMode,
} from "../Interfaces/interfaceRRHDeduccionEmpleado";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHDeduccionEmpleadoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHDeduccionEmpleado}
        apiRoutes={routesRRHDeduccionEmpleadoApi}
        field="NumeroDeduccion"
        title="Catálogo Deducción Empleados"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHDeduccionEmpleadoView;
