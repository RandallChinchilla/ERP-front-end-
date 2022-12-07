import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParDiocesis, routesParDiocesisApi } from "../Interfaces/interfaceParDiocesis";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParDiocesisView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParDiocesis}
        apiRoutes={routesParDiocesisApi}
        field="CodigoDiocesis"
        title="Catálogo Diócesis"
      />
    </div>
  );
};

export default ParDiocesisView;