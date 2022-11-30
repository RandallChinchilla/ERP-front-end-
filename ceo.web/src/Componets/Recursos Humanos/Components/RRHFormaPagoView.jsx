import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsRRHFormaPago, routesRRHFormaPagoApi } from "../Interfaces/interfaceRRHFormaPago";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHFormaPagoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHFormaPago}
        apiRoutes={routesRRHFormaPagoApi}
        field="CodigoFormaPago"
        title="Catálogo Forma Pago"
      />
    </div>
  );
};

export default RRHFormaPagoView;