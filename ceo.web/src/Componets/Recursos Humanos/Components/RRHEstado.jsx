import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhEstadoData.json";
import { useLocation } from "react-router-dom";
import { routesRRHEstadoApi, typeMode} from "../Interfaces/interfaceRRHEstado";

export const RRHEstado = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Estado"
      urlApi={routesRRHEstadoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};