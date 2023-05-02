export const columnsPasPortafolio = [
    {
      headerName: "Portafolio",
      field: "CodigoPortafolio",
      width: 400,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Nombre",
      field: "Descripcion",
      width: 400,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Centro Costo",
      field: "CodigoCentroCosto",
      width: 400,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.Codigo.Descripcion,
    },
  ];
  
  export const routesPasPortafolioApi = {
    get: "PasPortafolio/GetPasPortafolios",
    post: "PasPortafolio/PostPasPortafolio",
    update: "PasPortafolio/PutPasPortafolio",
    delete: "PasPortafolio/DeletePasPortafolio",
    navigation: "./PasPortafolio",
    navigationBack: "./PasPortafolioView",
  };
  
  export const typeMode = {
    onlyread: false,
  };