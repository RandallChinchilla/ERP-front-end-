import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParParentezco, routesParParentezcoApi, typeMode } from "../Interfaces/interfaceParParentezco";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParParetezcoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParParentezco}
        apiRoutes={routesParParentezcoApi}
        field="CodigoParentezco"
        title="Catálogo Parentezco"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParParetezcoView;