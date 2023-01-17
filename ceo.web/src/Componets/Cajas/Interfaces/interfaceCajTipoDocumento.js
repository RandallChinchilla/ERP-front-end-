export const columnsCajTipoDocumento = [
    {
      headerName: "Código Tipo Documento",
      field: "CodigoTipoDocumento",
      width: 550,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Descripción",
      field: "Descripcion",
      width: 550,
      headerAlign: "center",
      align: "center",
    },
  ];
  
  export const routesCajTipoDocumentoApi = {
    get: "CajTipoDocumento/GetCajTipoDocumentos",
    post: "CajTipoDocumento/PostCajTipoDocumento",
    update: "CajTipoDocumento/PutCajTipoDocumento",
    delete: "CajTipoDocumento/DeleteCajTipoDocumento",
    navigation: "./CajTipoDocumento",
    navigationBack: "./CajTipoDocumentoView",
  };
  
  export const typeMode = {
    onlyread: false,
  };