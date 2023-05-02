import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsPasPortafolio, routesPasPortafolioApi, typeMode } from "../Interfaces/interfacePasPortafolio";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasPortafolio interfas que define las columnas de las tablas
 * @param routesPasPortafolioApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const PasPortafolioView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasPortafolio}
        apiRoutes={routesPasPortafolioApi}
        field="CodigoPortafolio"
        title="Catálogo Portafolio"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasPortafolioView;