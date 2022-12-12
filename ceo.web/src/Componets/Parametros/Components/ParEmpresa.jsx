import React from "react";
import formJson from "../Data/parEmpresaData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParEmpresaApi, typeMode } from "../Interfaces/interfaceParEmpresa";

export const ParEmpresa = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Empresa"
      urlApi={routesParEmpresaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};