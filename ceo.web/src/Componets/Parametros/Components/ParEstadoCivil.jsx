import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsParEstadoCivil, routesParEstadoCivilApi } from "../Interfaces/interfaceParEstadoCivil";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParEstadoCivil = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsParEstadoCivil}
        apiRoutes={routesParEstadoCivilApi}
        field="CodigoEstadoCivil"
        title="Catálogo Estado Civil"
      />
    </div>
  );
};

export default ParEstadoCivil;