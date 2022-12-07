import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/ahoTipoData.json";
import { useLocation } from "react-router-dom";
import { routesAhoTipoApi, typeMode } from "../Interfaces/interfaceAhoTipo";

export const AhoTipo = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Tipo Ahorro"
      urlApi={routesAhoTipoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
