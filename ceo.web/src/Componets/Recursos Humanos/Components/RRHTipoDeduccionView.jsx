import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHTipoDeduccion,
  routesRRHTipoDeduccionApi,
  typeMode,
} from "../Interfaces/interfaceRRHTipoDeduccion";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHTipoDeduccionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHTipoDeduccion}
        apiRoutes={routesRRHTipoDeduccionApi}
        field="CodigoTipoDeduccion"
        title="Catálogo Tipo Deducción"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHTipoDeduccionView;
