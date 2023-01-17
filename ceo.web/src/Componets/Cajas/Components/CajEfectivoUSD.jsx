import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/cajEfectivoUSDData.json";
import { routesCajEfectivoUSDApi, typeMode } from "../Interfaces/interfaceCajEfectivoUSD";

export const CajEfectivoUSD = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Efectivo USD"
      urlApi={routesCajEfectivoUSDApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};