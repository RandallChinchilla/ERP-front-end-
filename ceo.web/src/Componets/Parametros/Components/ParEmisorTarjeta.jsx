import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/parEmisorTarjetaData.json";
import { useLocation } from "react-router-dom";
import { routesParEmisorTarjetaApi, typeMode } from "../Interfaces/interfaceParEmisorTarjeta";

export const ParEmisorTarjeta = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Emisor Tarjeta"
      urlApi={routesParEmisorTarjetaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};