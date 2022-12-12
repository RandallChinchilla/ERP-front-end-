import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsAhoTipo, routesAhoTipoApi, typeMode } from "../Interfaces/interfaceAhoTipo";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const AhoTipoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoTipo}
        apiRoutes={routesAhoTipoApi}
        field="CodigoTipo"
        title="Catálogo Tipo Ahorro"
        typeMode={typeMode}
      />
    </div>
  );
};

export default AhoTipoView;