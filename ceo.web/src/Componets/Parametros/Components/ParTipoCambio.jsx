import React from "react";
import formJson from "../Data/parTipoCambioData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParTipoCambioApi, typeMode } from "../Interfaces/interfaceParTipoCambio";

export const ParTipoCambio = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Tipo Cambio"
      urlApi={routesParTipoCambioApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};