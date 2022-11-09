export const columnsAhoMaestro = [
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
        title: "Portafolio",
        field: "CodigoPortafolio",
      },
      {
        title: "Numero Inversión",
        field: "NumeroInversion",
      },
      {
        title: "Aportante",
        field: "CodigoAportante",
      },
      {
        title: "Tipo",
        field: "CodigoTipo",
      },
      {
        title: "Moneda",
        field: "CodigoMoneda",
      },
      {
        title: "Estado",
        field: "CodigoEstadoNavigation.Descripcion",
        id: "CodigoEstadoNavigation.CodigoEstado",
      },
  ];
  
  export const routesAhoMaestroApi = {
    get: "AhoMaestro/GetAhoMaestros",
    post: "AhoMaestro/PostAhoMaestro",
    update: "AhoMaestro/PutAhoMaestro",
    delete: "AhoMaestro/DeleteAhoMaestro",
    navigation: "./AhoMaestro",
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