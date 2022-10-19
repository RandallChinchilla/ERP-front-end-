import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHFormaPago, routesRRHFormaPagoApi } from "../Interfaces/interfaceRRHFormaPago";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHFormaPago interfas que define las columnas de las tablas
 * @param routesRRHFormaPagoApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHFormaPagoView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHFormaPago}
        apiRoutes={routesRRHFormaPagoApi}
        field="CodigoTipoDeduccion"
        title="Catálogo Forma Pago"
      />
    </div>
  );
};

export default RRHFormaPagoView;