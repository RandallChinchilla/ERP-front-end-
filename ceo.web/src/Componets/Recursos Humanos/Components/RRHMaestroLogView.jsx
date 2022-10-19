import React from "react";
import { CrudTableFormNoEdit } from "../../CrossComponets/CrudTableFormNoEdit";
import { columnsRRHMaestroLog, routesRRHMaestroLogApi } from "../Interfaces/interfaceRRHMaestroLog";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHMaestroLog interfas que define las columnas de las tablas
 * @param routesRRHMaestroLogApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHMaestroLogView = () => {
  return (
    <div>
      <CrudTableFormNoEdit
        columns={columnsRRHMaestroLog}
        apiRoutes={routesRRHMaestroLogApi}
        field="NumeroEmpleado"
        title="Catálogo Maestro Log"
          />
    </div>
  );
};

export default RRHMaestroLogView;