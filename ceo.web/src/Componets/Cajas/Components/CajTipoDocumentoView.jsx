import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsCajTipoDocumento, routesCajTipoDocumentoApi, typeMode } from "../Interfaces/interfaceCajTipoDocumento";

const CajTipoDocumentoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsCajTipoDocumento}
        apiRoutes={routesCajTipoDocumentoApi}
        field="CodigoTipoDocumento"
        title="Catálogo Tipo Documento"
        typeMode={typeMode}
      />
    </div>
  );
};

export default CajTipoDocumentoView;