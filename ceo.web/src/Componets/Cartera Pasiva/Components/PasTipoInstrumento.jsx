import React from "react";
import { Form } from "../../CrossComponets/Form";
import {
  routesPasTipoInstrumentoApi,
  typeMode,
} from "../Interfaces/interfacePasTipoInstrumento";
import formJson from "../Data/pasTipoInstrumento.json";
import { useLocation } from "react-router-dom";

export const PasTipoInstrumento = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Aportes A Plazo"
      urlApi={routesPasTipoInstrumentoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
