import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { columnsPasTasaPlazo, routesPasTasaPlazoApi } from "../Interfaces/interfacePasTasaPlazo";

/**
 * Este componente renderiza el componente generico CrudTableForm, el cual nos permite
 * rendereizar una tabla dinamica a partir de las propiedades dadas.
 * @param columnsPasTasaPlazoView interfas que define las columnas de las tablas
 * @param routesPasTasaPlazoViewApi interfas que define las rutas de las Apis que se ven involucradas
 * en el CRUD de a tabla gernerada.
 * @field Nombre del Id de la tabla que nos sirve para manipular el estado de las filas de la tabla.
 * @title Titulo de la Tabla
 * @returns CrudTableform
 */

const PasTasaPlazoView = () => {
  return (
    <div>
      <CrudTableForm
        columns={columnsPasTasaPlazo}
        apiRoutes={routesPasTasaPlazoApi}
        field="CodigoTipo"
        title="Catálogo Tasa Plazo"
      />
    </div>
  );
};

export default PasTasaPlazoView;