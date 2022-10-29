import React from "react";
import { CrudTableBasic } from "../../CrossComponets/CrudTableBasic";
import {
  columnsPasTipoInstrumento,
  routesPasTipoInstrumentoApi,
} from "../Interfaces/interfacePasTipoInstrumento";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasTipoInstrumento = () => {
  return (
    <div>
      <CrudTableBasic
        columns={columnsPasTipoInstrumento}
        apiRoutes={routesPasTipoInstrumentoApi}
        field="CodigoTipo"
        title="Catálogo Tipo Instrumento"
        isEditable={true}
        isDeletable={true}
        isAdd={true}
      />
    </div>
  );
};

export default PasTipoInstrumento;
