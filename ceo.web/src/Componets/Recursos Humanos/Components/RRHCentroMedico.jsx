import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsRRHCentroMedico, routesRRHCentroMedicoApi } from "../Interfaces/interfaceRRHCentroMedico";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHCentroMedico = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsRRHCentroMedico}
        apiRoutes={routesRRHCentroMedicoApi}
        field="CodigoCentroMedico"
        title="Catálogo Centro Médico"
      />
    </div>
  );
};

export default RRHCentroMedico;

