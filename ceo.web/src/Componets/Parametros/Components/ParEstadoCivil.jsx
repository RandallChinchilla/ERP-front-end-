import React from "react";
import formJson from "../Data/parEstadoCivilData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParEstadoCivilApi, typeMode } from "../Interfaces/interfaceParEstadoCivil";

export const ParEstadoCivil = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Estado Civil"
      urlApi={routesParEstadoCivilApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};