import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsAhoTransaccion,
  routesAhoTransaccionApi,
} from "../Interfaces/interfaceAhoTransaccion";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsAhoTransaccion interfas que define las columnas de las tablas
 * @param routesAhoTransaccionApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const AhoTransaccionView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsAhoTransaccion}
        apiRoutes={routesAhoTransaccionApi}
        field="NumeroTransaccion"
        title="Catálogo Transacciones"
      />
    </div>
  );
};

export default AhoTransaccionView;
