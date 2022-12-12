import React from "react";
import formJson from "../Data/parTipoIdentificacionData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParTipoIdentificacionApi, typeMode } from "../Interfaces/interfaceParTipoIdentificacion";

export const ParTipoIdentificacion = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Tipo Identificación"
      urlApi={routesParTipoIdentificacionApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};