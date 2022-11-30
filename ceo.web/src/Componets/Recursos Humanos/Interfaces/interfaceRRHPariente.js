  export const columnsRRHPariente = [
    {
      headerName: "Número Empleado",
      field: "NumeroEmpleado",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Nombre",
      field: "Nombre",
      width: 350,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Parentezco",
      field: "CodigoParentezco",
      width: 350,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.Codigo.Descripcion,
    },
  ];
  
  export const routesRRHParienteApi = {
    get: "RrhPariente/GetRrhParientes",
    post: "RrhPariente/PostRrhPariente",
    update: "RrhPariente/PutRrhPariente",
    delete: "RrhPariente/DeleteRrhPariente",
    navigation: "./RrhPariente",
    navigationBack: "./RrhParienteView",
  };
  
  export const typeMode = {
    onlyread: false,
  };