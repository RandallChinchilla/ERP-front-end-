import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsPasOrigenAportante,
  routesPasOrigenAportanteApi,
} from "../Interfaces/interfacesPasOrigenAportante";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasOrigenAportanteView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasOrigenAportante}
        apiRoutes={routesPasOrigenAportanteApi}
        field="CodigoOrigenAportante"
        title="Catálogo Origen Aportante"
      />
    </div>
  );
};

export default PasOrigenAportanteView;
