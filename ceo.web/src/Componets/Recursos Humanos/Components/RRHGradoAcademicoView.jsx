import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsRRHGradoAcademico,
  routesRRHGradoAcademicoApi,
  typeMode,
} from "../Interfaces/interfaceRRHGradoAcademico";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHGradoAcademicoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsRRHGradoAcademico}
        apiRoutes={routesRRHGradoAcademicoApi}
        field="CodigoGrado"
        title="Catálogo Grado Académico"
        typeMode={typeMode}
      />
    </div>
  );
};

export default RRHGradoAcademicoView;