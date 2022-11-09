export const columnsAhoProducto = [
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
  
  export const routesAhoProductoApi = {
    get: "AhoProducto/GetAhoProductos",
    post: "AhoProducto/PostAhoProducto",
    update: "AhoProducto/PutAhoProducto",
    delete: "AhoProducto/DeleteAhoProducto",
    navigation: "./AhoProducto",
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
  