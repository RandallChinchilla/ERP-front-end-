import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsAhoTasa, routesAhoTasaApi } from "../Interfaces/interfaceAhoTasa";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsAhoTasa interfas que define las columnas de las tablas
 * @param routesAhoTasaApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const AhoTasaView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsAhoTasa}
        apiRoutes={routesAhoTasaApi}
        field="CodigoTipo"
        title="Catálogo Tasas"
      />
    </div>
  );
};

export default AhoTasaView;