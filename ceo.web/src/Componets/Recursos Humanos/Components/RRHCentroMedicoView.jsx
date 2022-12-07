import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHCentroMedico,
  routesRRHCentroMedicoApi,
  typeMode,
} from "../Interfaces/interfaceRRHCentroMedico";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHCentroMedicoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHCentroMedico}
        apiRoutes={routesRRHCentroMedicoApi}
        field="CodigoCentroMedico"
        title="Catálogo Centro Médico"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHCentroMedicoView;
