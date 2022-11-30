import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhMaestroData.json";
import { useLocation } from "react-router-dom";
import { routesRRHMaestroApi, typeMode } from "../Interfaces/interfaceRRHMaestro";

export const RRHMaestro = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Maestro"
      urlApi={routesRRHMaestroApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};