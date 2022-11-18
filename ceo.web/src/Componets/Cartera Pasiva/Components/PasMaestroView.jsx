import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsPasMaestro,
  routesPasMaestroApi,
} from "../Interfaces/interfacePasMaestro";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasMaestro interfas que define las columnas de las tablas
 * @param routesPasMaestroApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

export const PasMaestroView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasMaestro}
        apiRoutes={routesPasMaestroApi}
        field="NumeroInversion"
        title="Catálogo Maestro"
      />
    </div>
  );
};
