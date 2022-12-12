import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParCodigoTransaccion, routesParCodigoTransaccionApi, typeMode } from "../Interfaces/interfaceParCodigoTransaccion";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParCodigoTransaccionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParCodigoTransaccion}
        apiRoutes={routesParCodigoTransaccionApi}
        field="CodigoTransaccion"
        title="Catálogo Transacción"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParCodigoTransaccionView;