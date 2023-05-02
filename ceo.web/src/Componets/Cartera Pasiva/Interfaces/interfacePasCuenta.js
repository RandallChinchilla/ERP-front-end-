export const columnsPasCuenta = [
    {
      headerName: "Tipo",
      field: "CodigoTipo",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Número Cuenta Principal",
      field: "NumeroCuentaPrincipal",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
        headerName: "Fecha",
        field: "FechaHora",
        width: 250,
        headerAlign: "center",
        align: "center",
      },
    {
      headerName: "Moneda",
      field: "CodigoMoneda",
      width: 250,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
    },
    {
      headerName: "Estado",
      field: "CodigoEstado",
      width: 250,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
    },
  ];
  
  export const routesPasCuentaApi = {
    get: "PasCuenta/GetPasCuentas",
    post: "PasCuenta/PostPasCuenta",
    update: "PasCuenta/PutPasCuenta",
    delete: "PasCuenta/DeletePasCuenta",
    navigation: "./PasCuenta",
    navigationBack: "./PasCuentaView",
  };
  
  export const typeMode = {
    onlyread: false,
  };