import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsParMoneda, routesParMonedaApi } from "../Interfaces/interfaceParMoneda";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsParMoneda interfas que define las columnas de las tablas
 * @param routesParMonedaApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const ParMonedaView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsParMoneda}
        apiRoutes={routesParMonedaApi}
        field="CodigoMoneda"
        title="Catálogo Monedas"
      />
    </div>
  );
};

export default ParMonedaView;