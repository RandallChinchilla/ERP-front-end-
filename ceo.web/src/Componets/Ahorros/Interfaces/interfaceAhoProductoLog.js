export const columnsAhoProductoLog = [
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
        title: "Tipo",
        field: "CodigoTipo",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Moneda",
      field: "CodigoMoneda",
    },
    {
        title: "Estado",
        field: "CodigoEstado",
    },
  ];
  
  export const routesAhoProductoLogApi = {
    get: "AhoProductoLog/GetAhoProductosLog",
    post: "AhoProductoLog/PostAhoProductoLog",
    update: "AhoProductoLog/PutAhoProductoLog",
    delete: "AhoProductoLog/DeleteAhoProductoLog",
    navigation: "./AhoProductoLog",
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