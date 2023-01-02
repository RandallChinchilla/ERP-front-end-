import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/cajEfectivoEurData.json";
import { routesCajEfectivoEuroApi, typeMode } from "../Interfaces/interfaceCajEfectivoEuro";

export const CajEfectivoEuro = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Efectivo Euro"
      urlApi={routesCajEfectivoEuroApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};