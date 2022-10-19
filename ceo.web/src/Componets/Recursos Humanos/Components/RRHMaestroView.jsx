import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHMaestro, routesRRHMaestroApi } from "../Interfaces/interfaceRRHMaestro";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHMaestro interfas que define las columnas de las tablas
 * @param routesRRHMaestroApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHMaestroView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHMaestro}
        apiRoutes={routesRRHMaestroApi}
        field="NumeroEmpleado"
        title="Catálogo Maestro"
      />
    </div>
  );
};

export default RRHMaestroView;