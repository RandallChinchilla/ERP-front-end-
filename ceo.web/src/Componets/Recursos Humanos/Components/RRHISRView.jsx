import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsRRHISR, routesRRHISRApi } from "../Interfaces/interfaceRRHISR";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHISRView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHISR}
        apiRoutes={routesRRHISRApi}
        field="Consecutivo"
        title="Catálogo ISR"
      />
    </div>
  );
};

export default RRHISRView;