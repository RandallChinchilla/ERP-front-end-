import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhMaestroLogData.json";
import { useLocation } from "react-router-dom";
import { routesRRHMaestroLogApi, typeMode } from "../Interfaces/interfaceRRHMaestroLog";

export const RRHMaestroLog = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Maestro Log"
      urlApi={routesRRHMaestroLogApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};