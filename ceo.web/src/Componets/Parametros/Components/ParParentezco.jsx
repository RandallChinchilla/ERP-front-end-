import React from "react";
import formJson from "../Data/parParentezcoData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import { routesParParentezcoApi, typeMode } from "../Interfaces/interfaceParParentezco";

export const ParParentezco = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Parentezco"
      urlApi={routesParParentezcoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};