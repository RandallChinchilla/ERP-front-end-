import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHISR,
  routesRRHISRApi,
  typeMode,
} from "../Interfaces/interfaceRRHISR";

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
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHISRView;
