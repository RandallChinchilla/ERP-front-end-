import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHTipoDeduccion, routesRRHTipoDeduccionApi } from "../Interfaces/interfaceRRHTipoDeduccion";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHTipoDeduccionView interfas que define las columnas de las tablas
 * @param routesRRHTipoDeduccionViewApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHTipoDeduccionView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHTipoDeduccion}
        apiRoutes={routesRRHTipoDeduccionApi}
        field="CodigoTipoDeduccion"
        title="Catálogo Tipo Deducción"
      />
    </div>
  );
};

export default RRHTipoDeduccionView;