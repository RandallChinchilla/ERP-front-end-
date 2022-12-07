import React from "react";
import { CrudTableForm } from "../../CrossComponets/CrudTableForm";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsPasTasaPlazo,
  routesPasTasaPlazoApi,
  typeMode,
} from "../Interfaces/interfacePasTasaPlazo";

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
      <CrudTableFormNew
        columns={columnsPasTasaPlazo}
        apiRoutes={routesPasTasaPlazoApi}
        field="FechaHora"
        title="Catálogo Tasa Plazo"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasTasaPlazoView;
