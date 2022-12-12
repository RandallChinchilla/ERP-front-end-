import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoProducto,
  routesAhoProductoApi,
  typeMode,
} from "../Interfaces/interfaceAhoProducto";


const AhoProductoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoProducto}
        apiRoutes={routesAhoProductoApi}
        field="CodigoTipo"
        title="Catálogo Producto"
        typeMode={typeMode}
      />
    </div>
  );
};

export default AhoProductoView;
