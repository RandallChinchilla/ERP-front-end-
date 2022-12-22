import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/pasAutorizadoData.json";
import {
  routesPasAutorizadoApi,
  typeMode,
} from "../Interfaces/interfacePasAutorizado";

export const PasAutorizado = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Autorizado"
      urlApi={routesPasAutorizadoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};