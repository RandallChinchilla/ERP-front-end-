import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsPasCuenta, routesPasCuentaApi, typeMode } from "../Interfaces/interfacePasCuenta";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasCuenta interfas que define las columnas de las tablas
 * @param routesPasCuentaApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const PasCuentaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasCuenta}
        apiRoutes={routesPasCuentaApi}
        field="CodigoTipo"
        title="Catálogo Cuenta"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasCuentaView;