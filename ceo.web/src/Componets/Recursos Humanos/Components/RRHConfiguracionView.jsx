import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHConfiguracion,
  routesRRHConfiguracionApi,
  typeMode,
} from "../Interfaces/interfaceRRHConfiguracion";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHConfiguracionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHConfiguracion}
        apiRoutes={routesRRHConfiguracionApi}
        field="FechaHora"
        title="Catálogo Configuración"
      />
    </div>
  );
};

export default RRHConfiguracionView;
