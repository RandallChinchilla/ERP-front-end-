import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoMaestro,
  routesAhoMaestroApi,
} from "../Interfaces/interfaceAhoMaestro";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsAhoMaestro interfas que define las columnas de las tablas
 * @param routesAhoMaestroApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const AhoMaestroView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoMaestro}
        apiRoutes={routesAhoMaestroApi}
        field="NumeroInversion"
        title="Catálogo Maestro"
      />
    </div>
  );
};

export default AhoMaestroView;
