
export const columnsParCodigoTransaccion = [
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
      title: "Transacción",
      field: "CodigoTransaccion",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ];
  
  export const routesParCodigoTransaccionApi = {
    get: "ParCodigotransaccion/GetParCodigoTransacciones",
    post: "ParCodigotransaccion/PostParCodigotransaccion",
    update: "ParCodigotransaccion/PutParCodigotransaccion",
    delete: "ParCodigotransaccion/DeleteParCodigotransaccion",
    navigation: "./ParCodigotransaccion",
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