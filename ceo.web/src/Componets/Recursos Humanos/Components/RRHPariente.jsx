import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhParienteData.json";
import { useLocation } from "react-router-dom";
import { routesRRHParienteApi, typeMode } from "../Interfaces/interfaceRRHPariente";

export const RRHPariente = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Parientes"
      urlApi={routesRRHParienteApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
