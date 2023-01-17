import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsCajEfectivoUSD, routesCajEfectivoUSDApi, typeMode } from "../Interfaces/interfaceCajEfectivoUSD";

const CajEfectivoUSDView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsCajEfectivoUSD}
        apiRoutes={routesCajEfectivoUSDApi}
        field="CodigoMoneda"
        title="Catálogo Efectivo USD"
        typeMode={typeMode}
      />
    </div>
  );
};

export default CajEfectivoUSDView;