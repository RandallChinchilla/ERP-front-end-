import React from "react";
import { Form } from "../../CrossComponets/Form";
import {
  routesPasTipoInstrumentoApi,
  typeMode,
} from "../Interfaces/interfacePasTipoInstrumento";
import formJson from "../Data/pasOrigenFondosData.json";
import { useLocation } from "react-router-dom";
import { routesPasOrigenFondosApi } from "../Interfaces/interfacePasOrigenFondos";

export const PasOrigenFondo = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Origen Fondos"
      urlApi={routesPasOrigenFondosApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
