import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHPariente,
  routesRRHParienteApi,
  typeMode,
} from "../Interfaces/interfaceRRHPariente";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHParienteView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHPariente}
        apiRoutes={routesRRHParienteApi}
        field="NumeroEmpleado"
        title="Catálogo Parientes"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHParienteView;
