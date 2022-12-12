import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoTasa,
  routesAhoTasaApi,
  typeMode,
} from "../Interfaces/interfaceAhoTasa";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const AhoTasaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoTasa}
        apiRoutes={routesAhoTasaApi}
        field="CodigoTipo"
        title="Catálogo Tasa"
        typeMode={typeMode}
      />
    </div>
  );
};

export default AhoTasaView;
