import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhISRData.json";
import { useLocation } from "react-router-dom";
import { routesRRHISRApi, typeMode } from "../Interfaces/interfaceRRHISR";

export const RRHISR = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo ISR"
      urlApi={routesRRHISRApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
