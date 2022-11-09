import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsParTipoIdentificacion, routesParTipoIdentificacionApi } from "../Interfaces/interfaceParTipoIdentificacion";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsParTipoIdentificacion interfas que define las columnas de las tablas
 * @param routesParTipoIdentificacionApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const ParTipoIdentificacionView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsParTipoIdentificacion}
        apiRoutes={routesParTipoIdentificacionApi}
        field="CodigoTipoIdentificacion"
        title="Catálogo Tipo Identificación"
      />
    </div>
  );
};

export default ParTipoIdentificacionView;