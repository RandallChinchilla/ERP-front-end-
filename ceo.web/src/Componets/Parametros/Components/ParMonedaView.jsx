import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParMoneda, routesParMonedaApi, typeMode } from "../Interfaces/interfaceParMoneda";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParMonedaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParMoneda}
        apiRoutes={routesParMonedaApi}
        field="CodigoMoneda"
        title="Catálogo Moneda"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParMonedaView;