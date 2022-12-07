import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/parDistritoData.json";
import { useLocation } from "react-router-dom";
import { routesParDistritoApi, typeMode } from "../Interfaces/interfaceParDistrito";

export const ParDistrito = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Distrito"
      urlApi={routesParDistritoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};