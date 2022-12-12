import React from "react";
import formJson from "../Data/parMonedaData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParMonedaApi, typeMode } from "../Interfaces/interfaceParMoneda";

export const ParMoneda = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Moneda"
      urlApi={routesParMonedaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};