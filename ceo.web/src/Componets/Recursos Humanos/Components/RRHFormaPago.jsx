import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhFormaPagoData.json";
import { useLocation } from "react-router-dom";
import { routesRRHFormaPagoApi, typeMode } from "../Interfaces/interfaceRRHFormaPago";

export const RRHFormaPago = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Forma Pago"
      urlApi={routesRRHFormaPagoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};