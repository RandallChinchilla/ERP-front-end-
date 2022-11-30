import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhTipoPlanillaData.json";
import { useLocation } from "react-router-dom";
import { routesRRHTipoPlanillaApi, typeMode } from "../Interfaces/interfaceRRHTipoPlanilla";

export const RRHTipoPlanilla = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Tipo Planilla"
      urlApi={routesRRHTipoPlanillaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};