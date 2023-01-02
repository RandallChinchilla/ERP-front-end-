import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/cajEfectivoMilData.json";
import { routesCajEfectivoMilApi, typeMode } from "../Interfaces/interfaceCajEfectivoMil";

export const CajEfectivoMil = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Efectivo Mil"
      urlApi={routesCajEfectivoMilApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};