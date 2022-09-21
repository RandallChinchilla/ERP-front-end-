import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsRRHGradoAcademico, routesRRHGradoAcademicoApi } from "../Interfaces/interfaceRRHGradoAcademico";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const RRHGradoAcademico = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsRRHGradoAcademico}
        apiRoutes={routesRRHGradoAcademicoApi}
        field="CodigoGrado"
        title="Catálogo Grado Académico"
      />
    </div>
  );
};

export default RRHGradoAcademico;