import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import {
  columnsPasInstrumento,
  routesPasInstrumentoApi,
} from "../Interfaces/interfacesPasInstrumento";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasInstrumento interfas que define las columnas de las tablas
 * @param routesPasInstrumentoApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const PasInstrumentoView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsPasInstrumento}
        apiRoutes={routesPasInstrumentoApi}
        field="CodigoInstrumento"
        title="Catálogo Instrumentos"
      />
    </div>
  );
};

export default PasInstrumentoView;
