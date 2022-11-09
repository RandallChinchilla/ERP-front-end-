import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsParTipoCambio, routesParTipoCambioApi } from "../Interfaces/interfaceParTipoCambio";


/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsParTipoCambio interfas que define las columnas de las tablas
 * @param routesParTipoCambioApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const ParTipoCambioView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsParTipoCambio}
        apiRoutes={routesParTipoCambioApi}
        field="FechaHora"
        title="Catálogo Tipo Cambio"
      />
    </div>
  );
};

export default ParTipoCambioView;