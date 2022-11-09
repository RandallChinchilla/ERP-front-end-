import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { columnsParDistrito, routesParDistritoApi } from "../Interfaces/interfaceParDistrito";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const ParDistrito = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsParDistrito}
        apiRoutes={routesParDistritoApi}
        field="CodigoPais"
        title="Catálogo Distrito"
      />
    </div>
  );
};

export default ParDistrito;