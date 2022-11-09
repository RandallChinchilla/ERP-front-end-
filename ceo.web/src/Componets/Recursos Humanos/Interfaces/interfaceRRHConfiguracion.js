export const columnsRRHConfiguracion = [
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
      title: "Fecha Hora",
      field: "FechaHora",
    },
    {
        title: "Estado",
        field: "CodigoEstadoNavigation.Descripcion",
        id: "CodigoEstadoNavigation.CodigoEstado",
    },
  ];
  
  export const routesRRHConfiguracionApi = {
    get: "RrhConfiguracion/GetRrhConfiguraciones",
    post: "RrhConfiguracion/PostRrhConfiguracion",
    update: "RrhConfiguracion/PutRrhConfiguracion",
    delete: "RrhConfiguracion/DeleteRrhConfiguracion",
    navigation: "./RrhConfiguracion",
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