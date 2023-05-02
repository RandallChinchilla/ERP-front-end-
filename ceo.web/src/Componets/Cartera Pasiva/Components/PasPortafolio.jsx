import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/pasPortafolioData.json";
import {
  routesPasPortafolioApi,
  typeMode,
} from "../Interfaces/interfacePasPortafolio";

export const PasPortafolio = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Portafolio"
      urlApi={routesPasPortafolioApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};