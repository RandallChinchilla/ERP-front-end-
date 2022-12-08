import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/pasTransaccionData.json";
import { useLocation } from "react-router-dom";
import { routesPasTransaccionApi, typeMode } from "../Interfaces/interfacePasTransaccion";

export const PasTransaccion = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Transacción"
      urlApi={routesPasTransaccionApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
