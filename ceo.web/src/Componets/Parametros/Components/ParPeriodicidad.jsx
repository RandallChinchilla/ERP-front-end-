import React from "react";
import formJson from "../Data/parPeriodicidadData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParPeriodicidadApi, typeMode } from "../Interfaces/interfaceParPeriodicidad";

export const ParPeriodicidad = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Periodicidad"
      urlApi={routesParPeriodicidadApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};