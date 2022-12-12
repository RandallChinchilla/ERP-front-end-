import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsAhoProductoLog, routesAhoProductoLogApi, typeMode } from "../Interfaces/interfaceAhoProductoLog";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const AhoProductoLogView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoProductoLog}
        apiRoutes={routesAhoProductoLogApi}
        field="CodigoTipo"
        title="Catálogo Producto Log"
        typeMode={typeMode}
      />
    </div>
  );
};

export default AhoProductoLogView;