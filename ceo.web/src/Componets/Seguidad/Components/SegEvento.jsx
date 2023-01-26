import React from "react";
import formJson from "../Data/segEventoData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesSegEventoApi, typeMode } from "../Interfaces/interfaceSegEvento";

export const SegEvento = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Evento"
      urlApi={routesSegEventoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};