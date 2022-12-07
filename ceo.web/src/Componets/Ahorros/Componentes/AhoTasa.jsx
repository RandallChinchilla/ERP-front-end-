import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/ahoTasaData.json";
import { useLocation } from "react-router-dom";
import { routesAhoTasaApi, typeMode } from "../Interfaces/interfaceAhoTasa";

export const AhoTasa = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Tasas"
      urlApi={routesAhoTasaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};