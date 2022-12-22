import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhGradoAcademicoData.json";
import { useLocation } from "react-router-dom";
import { routesRRHGradoAcademicoApi, typeMode} from "../Interfaces/interfaceRRHGradoAcademico";

export const RRHGradoAcademico = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Grado Académico"
      urlApi={routesRRHGradoAcademicoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};