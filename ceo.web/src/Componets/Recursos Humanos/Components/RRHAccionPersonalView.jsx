import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHAccionPersonal,
  routesRRHAccionPersonalApi,
  typeMode,
} from "../Interfaces/interfaceRRHAccionPersonal";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHAccionPersonalView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHAccionPersonal}
        apiRoutes={routesRRHAccionPersonalApi}
        field="CodigoTipoAccion"
        title="Catálogo Acciones Personales"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHAccionPersonalView;
