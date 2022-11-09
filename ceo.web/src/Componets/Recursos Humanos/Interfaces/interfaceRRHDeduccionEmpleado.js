export const columnsRRHDeduccionEmpleado = [
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "#Deducción",
      field: "NumeroDeduccion",
    },
    {
      title: "Nombre",
      field: "NumeroEmpleado",
    },
    {
      title: "Tipo Deducción",
      field: "CodigoTipoDeduccion",
    },
    {
      title: "Monto",
      field: "Monto.Descripcion",
    },
    {
      title: "Detalle",
      field: "Detalle",
    },
  ];
  
  export const routesRRHDeduccionEmpleadoApi = {
    get: "RrhDeduccionEmpleado/GetPasInstrumentos",
    post: "RrhDeduccionEmpleado/PostRrhDeduccionEmpleado",
    update: "RrhDeduccionEmpleado/PutRrhDeduccionEmpleado",
    delete: "RrhDeduccionEmpleado/DeleteRrhDeduccionEmpleado",
    navigation: "./RrhDeduccionEmpleado",
  };
  
  export const tableStyle = {
    rowStyle: {
      fontSize: 12,
    },
    headerStyle: {
      backgroundColor: "#898883",
      color: "#FFF",
      fontSize: 13,
    },
  };
  