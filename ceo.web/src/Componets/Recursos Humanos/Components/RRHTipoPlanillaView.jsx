import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHTipoPlanilla,
  routesRRHTipoPlanillaApi,
  typeMode,
} from "../Interfaces/interfaceRRHTipoPlanilla";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHTipoPlanillaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHTipoPlanilla}
        apiRoutes={routesRRHTipoPlanillaApi}
        field="CodigoTipoPlanilla"
        title="Catálogo Tipo Planilla"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHTipoPlanillaView;
