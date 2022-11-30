import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsRRHMotivoSalida, routesRRHMotivoSalidaApi } from "../Interfaces/interfaceRRHMotivoSalida";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHMotivoSalidaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHMotivoSalida}
        apiRoutes={routesRRHMotivoSalidaApi}
        field="CodigoMotivoSalida"
        title="Catálogo Motivo Salida"
      />
    </div>
  );
};

export default RRHMotivoSalidaView;