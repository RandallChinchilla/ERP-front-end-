import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParEstadoCivil, routesParEstadoCivilApi, typeMode } from "../Interfaces/interfaceParEstadoCivil";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParEstadoCivilView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParEstadoCivil}
        apiRoutes={routesParEstadoCivilApi}
        field="CodigoEstadoCivil"
        title="Catálogo Estado Civil"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParEstadoCivilView;