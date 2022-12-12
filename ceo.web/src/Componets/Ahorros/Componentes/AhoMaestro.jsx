import React from "react";
import formJson from "../Data/ahoMaestroData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import {  routesAhoMaestroApi,  typeMode,} from "../Interfaces/interfaceAhoMaestro";

export const AhoMaestro = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Maestro"
      urlApi={routesAhoMaestroApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};