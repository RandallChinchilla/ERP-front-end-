import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsRRHPariente, routesRRHParienteApi } from "../Interfaces/interfaceRRHPariente";

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
      />
    </div>
  );
};

export default RRHParienteView;