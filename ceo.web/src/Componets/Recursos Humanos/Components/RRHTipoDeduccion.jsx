import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhTipoDeduccionData.json";
import { useLocation } from "react-router-dom";
import { routesRRHTipoDeduccionApi, typeMode } from "../Interfaces/interfaceRRHTipoDeduccion";

export const RRHTipoDeduccion = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Tipo Deducción"
      urlApi={routesRRHTipoDeduccionApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};