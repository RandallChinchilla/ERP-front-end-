import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import {
  columnsPasAportante,
  routesPasAportanteApi,
} from "../Interfaces/interfacePasAportante";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasAportante interfas que define las columnas de las tablas
 * @param routesPasAportanteApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const PasAportanteView = () => {
  console.log("hola perra....");
  return (
    <div>
      <CrudTableForm
        columns={columnsPasAportante}
        apiRoutes={routesPasAportanteApi}
        field="CodigoOrigenAportante"
        title="Catálogo Aportante"
      />
    </div>
  );
};

export default PasAportanteView;
