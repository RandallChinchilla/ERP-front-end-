import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsSegConfiguracion, routesSegConfiguracionApi, typeMode } from "../Interfaces/interfaceSegConfiguracion";

export const SegConfiguracionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsSegConfiguracion}
        apiRoutes={routesSegConfiguracionApi}
        field="IdParametro"
        title="Catálogo Configuración"
        typeMode={typeMode}
      />
    </div>
  );
};