import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsRRHTipoPlanilla, routesRRHTipoPlanillaApi } from "../Interfaces/interfaceRRHTipoPlanilla";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsRRHTipoPlanilla interfas que define las columnas de las tablas
 * @param routesRRHTipoPlanillaApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const RRHTipoPlanillaView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsRRHTipoPlanilla}
        apiRoutes={routesRRHTipoPlanillaApi}
        field="CodigoTipoPlanilla"
        title="Catálogo Tipo Planilla"
      />
    </div>
  );
};

export default RRHTipoPlanillaView;