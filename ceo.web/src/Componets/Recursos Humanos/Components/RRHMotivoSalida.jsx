import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import {
  columnsRRHMotivoSalida,
  routesRRHMotivoSalidaApi,
} from "../Interfaces/interfaceRRHMotivoSalida";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHMotivoSalida = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsRRHMotivoSalida}
        apiRoutes={routesRRHMotivoSalidaApi}
        field="CodigoMotivoSalida"
        title="Catálogo Motivo Salida"
      />
    </div>
  );
};

export default RRHMotivoSalida;
