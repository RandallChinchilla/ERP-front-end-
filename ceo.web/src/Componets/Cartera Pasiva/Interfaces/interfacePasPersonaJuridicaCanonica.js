export const columnsPasPersonaJuridicaCanonica = [
    {
      headerName: "Persona Jurídica Canónica",
      field: "CodigoOtraPersonaJuridicaCanonica",
      width: 600,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Descripción",
      field: "Descripcion",
      width: 600,
      headerAlign: "center",
      align: "center",
    },
  ];
  
  export const routesPasPersonaJuridicaCanonicaApi = {
    get: "PasPersonaJuridicaCanonica/GetPasPersonasJuridicasCanonicas",
    post: "PasPersonaJuridicaCanonica/PostPasPersonaJuridicaCanonica",
    update: "PasPersonaJuridicaCanonica/PutPasPersonaJuridicaCanonica",
    delete: "PasPersonaJuridicaCanonica/DeletePasPersonaJuridicaCanonica",
    navigation: "./PasPersonaJuridicaCanonica",
    navigationBack: "./PasPersonaJuridicaCanonicaView",
  };
  
  export const typeMode = {
    onlyread: false,
    deleteButton: false,
    editeButton: false,
    addButton: false,
  };  