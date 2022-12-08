import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsPasTransaccion,
  routesPasTransaccionApi,
  typeMode,
} from "../Interfaces/interfacePasTransaccion";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasTransaccionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasTransaccion}
        apiRoutes={routesPasTransaccionApi}
        field="NumeroTransaccion"
        title="Catálogo Transacción"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasTransaccionView;
