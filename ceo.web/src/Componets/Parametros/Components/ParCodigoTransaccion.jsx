import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/parCodigoTransaccionData.json";
import { useLocation } from "react-router-dom";
import { routesParCodigoTransaccionApi, typeMode } from "../Interfaces/interfaceParCodigoTransaccion";

export const ParCodigoTransaccion = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Transacciones"
      urlApi={routesParCodigoTransaccionApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};