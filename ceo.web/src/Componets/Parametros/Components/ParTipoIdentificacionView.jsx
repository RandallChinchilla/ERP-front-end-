import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParTipoIdentificacion, routesParTipoIdentificacionApi, typeMode } from "../Interfaces/interfaceParTipoIdentificacion";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParTipoIdentificacionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParTipoIdentificacion}
        apiRoutes={routesParTipoIdentificacionApi}
        field="CodigoTipoIdentificacion"
        title="Catálogo Tipo Identificación"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParTipoIdentificacionView;