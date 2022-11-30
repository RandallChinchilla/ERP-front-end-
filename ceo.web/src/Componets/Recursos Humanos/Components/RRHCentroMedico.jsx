import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhCentroMedicoData.json";
import { useLocation } from "react-router-dom";
import { routesRRHCentroMedicoApi, typeMode } from "../Interfaces/interfaceRRHCentroMedico";

export const RRHCentroMedico = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Centro Médico"
      urlApi={routesRRHCentroMedicoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};