import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhConfiguracionData.json";
import { useLocation } from "react-router-dom";
import { routesRRHConfiguracionApi, typeMode } from "../Interfaces/interfaceRRHConfiguracion";

export const RRHConfiguracion = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Configuraciones"
      urlApi={routesRRHConfiguracionApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};