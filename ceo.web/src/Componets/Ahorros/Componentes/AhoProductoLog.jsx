import React from "react";
import { Form } from "../../CrossComponets/Form";
import formJson from "../Data/ahoProductoLogData.json";
import { useLocation } from "react-router-dom";
import { routesAhoProductoLogApi, typeMode } from "../Interfaces/interfaceAhoProductoLog";

export const AhoProductoLog = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Catálogo Producto Log"
      urlApi={routesAhoProductoLogApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};

