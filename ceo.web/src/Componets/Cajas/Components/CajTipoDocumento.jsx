import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/cajTipoDocumentoData.json";
import { routesCajTipoDocumentoApi, typeMode } from "../Interfaces/interfaceCajTipoDocumento";

export const CajTipoDocumento = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Tipo Documento"
      urlApi={routesCajTipoDocumentoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};