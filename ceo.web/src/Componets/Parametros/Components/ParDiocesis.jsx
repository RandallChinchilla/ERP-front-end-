import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsParDiocesis, routesParDiocesisApi } from "../Interfaces/interfaceParDiocesis";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParDiocesis = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsParDiocesis}
        apiRoutes={routesParDiocesisApi}
        field="CodigoDiocesis"
        title="Catálogo Diocesis"
      />
    </div>
  );
};

export default ParDiocesis;