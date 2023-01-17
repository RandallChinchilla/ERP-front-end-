import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsCajEfectivoMil, routesCajEfectivoMilApi, typeMode } from "../Interfaces/interfaceCajEfectivoMil";

const CajEfectivoMilView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsCajEfectivoMil}
        apiRoutes={routesCajEfectivoMilApi}
        field="CodigoMoneda"
        title="Catálogo Efectivo Mil"
        typeMode={typeMode}
      />
    </div>
  );
};

export default CajEfectivoMilView;