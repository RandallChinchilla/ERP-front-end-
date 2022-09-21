import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsSegEvento, routesSegEventoApi } from "../Interfaces/interfaceSegEvento";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const SegEvento = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsSegEvento}
        apiRoutes={routesSegEventoApi}
        field="CodigoTipo"
        title="Catálogo Tipo Ahorro"
      />
    </div>
  );
};

export default SegEvento;