import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParEmpresa, routesParEmpresaApi, typeMode } from "../Interfaces/interfaceParEmpresa";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParEmpresaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParEmpresa}
        apiRoutes={routesParEmpresaApi}
        field="Nombre"
        title="Catálogo Empresa"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParEmpresaView;