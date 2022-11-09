export const columnsParMoneda = [
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
      title: "Moneda",
      field: "CodigoMoneda",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ];
  
  export const routesParMonedaApi = {
    get: "ParMonedum/GetParMonedas",
    post: "ParMonedum/PostParMoneda",
    update: "ParMonedum/PutParMoneda",
    delete: "ParMonedum/DeleteParMoneda",
    navigation: "./ParMoneda",
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