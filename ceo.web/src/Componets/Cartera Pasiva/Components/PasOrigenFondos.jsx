import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import {
  columnsPasOrigenFondos,
  routesPasOrigenFondosApi,
} from "../Interfaces/interfacePasOrigenFondos";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasOrigenFondos = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsPasOrigenFondos}
        apiRoutes={routesPasOrigenFondosApi}
        field="CodigoOrigenFondos"
        title="Catálogo Origen Fondos"
        isEditable={true}
        isDeletable={true}
        isAdd={true}
      />
    </div>
  );
};

export default PasOrigenFondos;
