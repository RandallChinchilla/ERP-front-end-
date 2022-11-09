import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHAccionPersonal, routesRRHAccionPersonalApi } from "../Interfaces/interfaceRRHAccionPersonal";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHAccionPersonal interfas que define las columnas de las tablas
 * @param routesRRHAccionPersonalApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHAccionPersonalView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHAccionPersonal}
        apiRoutes={routesRRHAccionPersonalApi}
        field="CodigoTipoAccion"
        title="Catálogo Acciones Personales"
      />
    </div>
  );
};

export default RRHAccionPersonalView;