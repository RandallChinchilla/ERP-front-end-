import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoMaestro,
  routesAhoMaestroApi,
  typeMode,
} from "../Interfaces/interfaceAhoMaestro";

const AhoMaestroView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoMaestro}
        apiRoutes={routesAhoMaestroApi}
        field="NumeroInversion"
        title="Catálogo Maestro"
        typeMode={typeMode}
      />
    </div>
  );
};

export default AhoMaestroView;
