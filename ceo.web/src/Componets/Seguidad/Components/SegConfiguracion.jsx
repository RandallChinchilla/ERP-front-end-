import React from "react";
import formJson from "../Data/segConfiguracionData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesSegConfiguracionApi, typeMode } from "../Interfaces/interfaceSegConfiguracion";

export const SegConfiguracion = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Configuración"
      urlApi={routesSegConfiguracionApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};