import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsParEmpresa, routesParEmpresaApi } from "../Interfaces/interfaceParEmpresa";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsParEmpresa interfas que define las columnas de las tablas
 * @param routesParEmpresaApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const ParEmpresaView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsParEmpresa}
        apiRoutes={routesParEmpresaApi}
        field="Nombre"
        title="Catálogo Empresas"
      />
    </div>
  );
};

export default ParEmpresaView;