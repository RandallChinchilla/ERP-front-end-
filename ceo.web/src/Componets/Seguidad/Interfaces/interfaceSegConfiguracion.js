export const columnsSegConfiguracion = [
    {
      headerName: "Consecutivo",
      field: "IdParametro",
      width: 400,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Fecha Ingreso",
      field: "FechaHoraIngreso",
      width: 400,
      headerAlign: "center",
      align: "center",
    },
    {
        headerName: "Estado",
        field: "CodigoEstado",
        width: 400,
        headerAlign: "center",
        align: "center",
        valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
      },
  ];
  
  export const routesSegConfiguracionApi = {
    get: "SegConfiguracion/GetSegConfiguraciones",
    post: "SegConfiguracion/PostSegConfiguracion",
    update: "SegConfiguracion/PutSegConfiguracion",
    delete: "SegConfiguracion/DeleteSegConfiguracion",
    navigation: "./SegConfiguracion",
    navigationBack: "./SegConfiguracionView",
  };
  
  export const typeMode = {
    onlyread: false,
    deleteButton: true,
    editeButton: true,
    addButton: false,
  };