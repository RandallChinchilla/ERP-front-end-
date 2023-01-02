import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsCajEfectivoEuro, routesCajEfectivoEuroApi, typeMode } from "../Interfaces/interfaceCajEfectivoEuro";

const CajEfectivoEuroView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsCajEfectivoEuro}
        apiRoutes={routesCajEfectivoEuroApi}
        field="CodigoMoneda"
        title="Catálogo Efectivo Euro"
        typeMode={typeMode}
      />
    </div>
  );
};

export default CajEfectivoEuroView;