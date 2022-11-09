import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsAhoProductoLog, routesAhoProductoLogApi } from "../Interfaces/interfaceAhoProductoLog";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsAhoProductoLog interfas que define las columnas de las tablas
 * @param routesAhoProductoLogApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const AhoProductoLogView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsAhoProductoLog}
        apiRoutes={routesAhoProductoLogApi}
        field="CodigoTipo"
        title="Catálogo Productos Log"
      />
    </div>
  );
};

export default AhoProductoLogView;