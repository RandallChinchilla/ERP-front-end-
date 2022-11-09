export const columnsParEmpresa = [
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
      title: "Nombre",
      field: "Nombre",
    },
    {
      title: "Número Id",
      field: "NumeroId",
    },
    {
      title: "Estado",
      field: "CodigoEstado",
    },
  ];
  
  export const routesParEmpresaApi = {
    get: "ParEmpresa/GetParEmpresas",
    post: "ParEmpresa/PostParEmpresa",
    update: "ParEmpresa/PutParEmpresa",
    delete: "ParEmpresa/DeleteParEmpresa",
    navigation: "./ParEmpresa",
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