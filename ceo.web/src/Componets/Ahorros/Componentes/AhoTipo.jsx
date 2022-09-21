import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsAhoTipo, routesAhoTipoApi } from "../Interfaces/interfaceAhoTipo";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const AhoTipo = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsAhoTipo}
        apiRoutes={routesAhoTipoApi}
        field="CodigoTipo"
        title="Catálogo Tipo Ahorro"
      />
    </div>
  );
};

export default AhoTipo;