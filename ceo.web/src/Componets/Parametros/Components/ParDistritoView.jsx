import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsParDistrito, routesParDistritoApi, typeMode } from "../Interfaces/interfaceParDistrito";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParDistritoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsParDistrito}
        apiRoutes={routesParDistritoApi}
        field="CodigoDistrito"
        title="Catálogo Distrito"
        typeMode={typeMode}
      />
    </div>
  );
};

export default ParDistritoView;