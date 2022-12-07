import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsPasOrigenFondos,
  routesPasOrigenFondosApi,
  typeMode,
} from "../Interfaces/interfacePasOrigenFondos";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasOrigenFondosView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasOrigenFondos}
        apiRoutes={routesPasOrigenFondosApi}
        field="CodigoOrigenFondos"
        title="Catálogo Origen Fondos"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasOrigenFondosView;
