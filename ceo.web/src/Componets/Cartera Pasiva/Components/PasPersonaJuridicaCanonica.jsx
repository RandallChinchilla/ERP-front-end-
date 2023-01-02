import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/pasPersonaJuridicaCanonicaData.json";
import { useLocation } from "react-router-dom";
import { routesPasPersonaJuridicaCanonicaApi, typeMode } from "../Interfaces/interfacePasPersonaJuridicaCanonica";

export const PasPersonaJuridicaCanonica = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Persona Jurídica Canónica"
      urlApi={routesPasPersonaJuridicaCanonicaApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};