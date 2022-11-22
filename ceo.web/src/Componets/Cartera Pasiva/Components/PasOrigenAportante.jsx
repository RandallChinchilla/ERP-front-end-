import React from "react";
import { Form } from "../../CrossComponets/Form";
import { typeMode } from "../Interfaces/interfacePasTipoInstrumento";
import formJson from "../Data/pasOrigenAportante.json";
import { useLocation } from "react-router-dom";
import { routesPasOrigenAportanteApi } from "../Interfaces/interfacesPasOrigenAportante";

export const PasOrigenAportante = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Origen Aportante"
      urlApi={routesPasOrigenAportanteApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
