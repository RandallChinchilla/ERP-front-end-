import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHPariente, routesRRHParienteApi } from "../Interfaces/interfaceRRHPariente";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHPariente interfas que define las columnas de las tablas
 * @param routesRRHParienteApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHParienteView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHPariente}
        apiRoutes={routesRRHParienteApi}
        field="NumeroEmpleado"
        title="Catálogo Parientes"
      />
    </div>
  );
};

export default RRHParienteView;