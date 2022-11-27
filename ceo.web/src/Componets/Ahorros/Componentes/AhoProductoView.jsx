import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoProducto,
  routesAhoProductoApi,
} from "../Interfaces/interfaceAhoProducto";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsAhoProducto interfas que define las columnas de las tablas
 * @param routesAhoProductoApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const AhoProductoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoProducto}
        apiRoutes={routesAhoProductoApi}
        field="CodigoTipo"
        title="Catálogo Productos"
      />
    </div>
  );
};

export default AhoProductoView;
