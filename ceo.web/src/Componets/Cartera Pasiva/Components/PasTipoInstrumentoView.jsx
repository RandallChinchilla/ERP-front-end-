import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import {
  columnsPasTipoInstrumento,
  routesPasTipoInstrumentoApi,
} from "../Interfaces/interfacePasTipoInstrumento";

/**
 * Este componente renderiza el componente generico CrudTableBasic, el cual nos permite
 * realiazar un crud sobre un componente material-table
 * @returns CrudTableBasic
 */

const PasTipoInstrumentoView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasTipoInstrumento}
        apiRoutes={routesPasTipoInstrumentoApi}
        field="CodigoTipo"
        title="Catálogo Tipo Instrumento"
      />
    </div>
  );
};

export default PasTipoInstrumentoView;
