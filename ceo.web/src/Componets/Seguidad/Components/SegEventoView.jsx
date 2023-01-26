import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsSegEvento, routesSegEventoApi, typeMode } from "../Interfaces/interfaceSegEvento";

export const SegEventoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsSegEvento}
        apiRoutes={routesSegEventoApi}
        field="IdEvento"
        title="Catálogo Evento"
        typeMode={typeMode}
      />
    </div>
  );
};