import React from "react";
import formJson from "../Data/pasInstrumentoData.json";
import { Form } from "../../CrossComponets/Form";
import { routesPasInstrumentoApi } from "../Interfaces/interfacesPasInstrumento";

export const PasInstrumento = () => {
  return (
    <Form
      formJson={formJson}
      title="INSTRUMENTO"
      urlApi={routesPasInstrumentoApi}
    />
  );
};
