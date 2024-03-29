import React from "react";
import formJson from "../Data/pasTazaPlazoData.json";
import { Form } from "../../CrossComponets/Form";
import { useLocation } from "react-router-dom";
import {
  routesPasTasaPlazoApi,
  typeMode,
} from "../Interfaces/interfacePasTasaPlazo";

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
export const PasTasaPlazo = () => {
  const { rowUpdate } = useLocation();
  return (
    <Form
      formJson={formJson}
      title="Tasa Plazo"
      urlApi={routesPasTasaPlazoApi}
      rowUpdate={rowUpdate}
      typeMode={typeMode}
    />
  );
};
