import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import {
  columnsPasOrigenAportante,
  routesPasOrigenAportanteApi,
} from "../Interfaces/interfacesPasOrigenAportante";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasOrigenAportante = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsPasOrigenAportante}
        apiRoutes={routesPasOrigenAportanteApi}
        field="CodigoOrigenAportante"
        title="Catálogo Origen Aportante"
        isEditable={true}
        isDeletable={true}
        isAdd={true}
      />
    </div>
  );
};

export default PasOrigenAportante;
