import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsParEmisorTarjeta, routesParEmisorTarjetaApi } from "../Interfaces/interfaceParEmisorTarjeta";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParEmisorTarjeta = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsParEmisorTarjeta}
        apiRoutes={routesParEmisorTarjetaApi}
        field="CodigoEmisor"
        title="Catálogo Emisor Tarjeta"
      />
    </div>
  );
};

export default ParEmisorTarjeta;