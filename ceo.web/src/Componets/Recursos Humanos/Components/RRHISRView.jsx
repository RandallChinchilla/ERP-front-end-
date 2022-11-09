import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHISR, routesRRHISRApi } from "../Interfaces/interfaceRRHISR";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHISR interfas que define las columnas de las tablas
 * @param routesRRHISRApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHISRView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHISR}
        apiRoutes={routesRRHISRApi}
        field="Consecutivo"
        title="Catálogo ISR"
      />
    </div>
  );
};

export default RRHISRView;