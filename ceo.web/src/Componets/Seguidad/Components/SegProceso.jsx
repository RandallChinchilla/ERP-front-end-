import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsSegProceso, routesSegProcesoApi } from "../Interfaces/interfaceSegProceso";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const SegProceso = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsSegProceso}
        apiRoutes={routesSegProcesoApi}
        field="idProceso"
        title="Catálogo Proceso"
      />
    </div>
  );
};

export default SegProceso;