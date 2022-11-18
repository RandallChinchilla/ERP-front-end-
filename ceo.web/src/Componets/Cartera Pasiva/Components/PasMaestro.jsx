import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/pasMaestroData.json";
import { routesPasMaestroApi } from "../Interfaces/interfacePasMaestro";

export const PasMaestro = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Maestro"
      urlApi={routesPasMaestroApi}
      rowUpdate={rowUpdate}
    />
  );
};
