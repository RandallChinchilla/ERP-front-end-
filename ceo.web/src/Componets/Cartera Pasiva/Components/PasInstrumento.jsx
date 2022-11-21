import React, { useEffect } from "react";
import formJson from "../Data/pasInstrumentoData.json";
import { Form } from "../../CrossComponets/Form";
import {
  routesPasInstrumentoApi,
  typeMode,
} from "../Interfaces/interfacesPasInstrumento";
import { useLocation } from "react-router-dom";
import { helpHttp } from "../../../Helpers/HelpHttp";

/**
 * Este componente renderiza un componente dinamico a partir del componenete Form,, el cual nos permite
 * rendereizar un formulario dinamico.
 * @param formJson Json define los elementos que tendra el formulario, este Json tambien define las validaciones
 * que tendra cada elemento, su diseño y el orden en que se mostraran en el formulario.
 * @param urlApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD del formulario renderizado.
 * @rowUpdate Elemento que se selecciona de una tabla para ser actualizdo
 * @title Titulo del formulario
 * @returns CrudTableform
 */
export const PasInstrumento = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="INSTRUMENTO"
      urlApi={routesPasInstrumentoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
