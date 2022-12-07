import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/parDiocesisData.json";
import { useLocation } from "react-router-dom";
import { routesParDiocesisApi, typeMode } from "../Interfaces/interfaceParDiocesis";

export const ParDiocesis = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Diócesis"
      urlApi={routesParDiocesisApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};