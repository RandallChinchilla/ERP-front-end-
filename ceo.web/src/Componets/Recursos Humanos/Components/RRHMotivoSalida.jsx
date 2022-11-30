import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhMotivoSalidaData.json";
import { useLocation } from "react-router-dom";
import { routesRRHMotivoSalidaApi, typeMode } from "../Interfaces/interfaceRRHMotivoSalida";

export const RRHMotivoSalida = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Motivo Salida"
      urlApi={routesRRHMotivoSalidaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};