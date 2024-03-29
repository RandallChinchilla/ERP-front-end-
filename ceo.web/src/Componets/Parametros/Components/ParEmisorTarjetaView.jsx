import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParEmisorTarjeta, routesParEmisorTarjetaApi, typeMode } from "../Interfaces/interfaceParEmisorTarjeta";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParEmisorTarjetaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParEmisorTarjeta}
        apiRoutes={routesParEmisorTarjetaApi}
        field="CodigoEmisor"
        title="Catálogo Emisor Tarjeta"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParEmisorTarjetaView;