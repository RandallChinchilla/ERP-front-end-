import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhAccionPersonalData.json";
import { useLocation } from "react-router-dom";
import { routesRRHAccionPersonalApi, typeMode } from "../Interfaces/interfaceRRHAccionPersonal";

export const RRHAccionPersonal = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Acción Personal"
      urlApi={routesRRHAccionPersonalApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};