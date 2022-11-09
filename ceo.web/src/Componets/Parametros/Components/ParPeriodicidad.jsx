import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsParPeriodicidad, routesParPeriodicidadApi } from "../Interfaces/interfaceParPeriodicidad";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParPeriodicidad = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsParPeriodicidad}
        apiRoutes={routesParPeriodicidadApi}
        field="CodigoPeriodicidad"
        title="Catálogo Periodicidad"
      />
    </div>
  );
};

export default ParPeriodicidad;