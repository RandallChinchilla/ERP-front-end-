import React from "react";
import { CrudTableFormNew } from "../../CrossComponets/CrudTableFormNew";
import { columnsPasPersonaJuridicaCanonica, routesPasPersonaJuridicaCanonicaApi, typeMode } from "../Interfaces/interfacePasPersonaJuridicaCanonica";


const PasPersonaJuridicaCanonicaView = () => {
  return (
    <div>
      <CrudTableFormNew
        columns={columnsPasPersonaJuridicaCanonica}
        apiRoutes={routesPasPersonaJuridicaCanonicaApi}
        field="CodigoOtraPersonaJuridicaCanonica"
        title="Catálogo Persona Jurídica Canónica"
        typeMode={typeMode}
      />
    </div>
  );
};

export default PasPersonaJuridicaCanonicaView;