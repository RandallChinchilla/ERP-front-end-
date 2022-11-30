import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/rrhDeduccionEmpleadoData.json";
import { useLocation } from "react-router-dom";
import { routesRRHDeduccionEmpleadoApi, typeMode } from "../Interfaces/interfaceRRHDeduccionEmpleado";

export const RRHDeduccionEmpleado = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Deducción Empleados"
      urlApi={routesRRHDeduccionEmpleadoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};