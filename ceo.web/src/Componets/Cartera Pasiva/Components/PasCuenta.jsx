import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/pasCuentaData.json";
import {
  routesPasCuentaApi,
  typeMode,
} from "../Interfaces/interfacePasCuenta";

export const PasCuenta = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Cuenta"
      urlApi={routesPasCuentaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};