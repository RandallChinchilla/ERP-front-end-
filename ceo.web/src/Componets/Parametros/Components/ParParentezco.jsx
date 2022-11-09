import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsParParentezco, routesParParentezcoApi } from "../Interfaces/interfaceParParentezco";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParParentezco = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsParParentezco}
        apiRoutes={routesParParentezcoApi}
        field="NumeroEmpleado"
        title="Catálogo Parentezco"
      />
    </div>
  );
};

export default ParParentezco;