import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsPasAutorizado, routesPasAutorizadoApi, typeMode } from "../Interfaces/interfacePasAutorizado";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasAutorizado interfas que define las columnas de las tablas
 * @param routesPasAportanteApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const PasAutorizadoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasAutorizado}
        apiRoutes={routesPasAutorizadoApi}
        field="CodigoAportante"
        title="Catálogo Autorizado"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasAutorizadoView;