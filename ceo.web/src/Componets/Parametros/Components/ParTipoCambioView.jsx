import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParTipoCambio, routesParTipoCambioApi, typeMode } from "../Interfaces/interfaceParTipoCambio";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParTipoCambioView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParTipoCambio}
        apiRoutes={routesParTipoCambioApi}
        field="FechaHora"
        title="Catálogo Tipo Cambio"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParTipoCambioView;