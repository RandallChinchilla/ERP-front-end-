import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHConfiguracion, routesRRHConfiguracionApi } from "../Interfaces/interfaceRRHConfiguracion";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHConfiguracion interfas que define las columnas de las tablas
 * @param routesRRHConfiguracionApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHConfiguracionView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHConfiguracion}
        apiRoutes={routesRRHConfiguracionApi}
        field="FechaHora"
        title="Catálogo Configuraciones"
      />
    </div>
  );
};

export default RRHConfiguracionView;