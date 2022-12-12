import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoTransaccion,
  routesAhoTransaccionApi,
  typeMode,
} from "../Interfaces/interfaceAhoTransaccion";


const AhoTransaccionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoTransaccion}
        apiRoutes={routesAhoTransaccionApi}
        field="NumeroTransaccion"
        title="Catálogo Transacción"
        typeMode={typeMode}
      />
    </div>
  );
};

export default AhoTransaccionView;
