import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParPeriodicidad, routesParPeriodicidadApi, typeMode } from "../Interfaces/interfaceParPeriodicidad";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParPeriodicidadView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParPeriodicidad}
        apiRoutes={routesParPeriodicidadApi}
        field="CodigoPeriodicidad"
        title="Catálogo Periodicidad"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParPeriodicidadView;