export const columnsAhoTasa = [
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    { title: "Tipo", field: "CodigoTipo"},
    { title: "Tasa", field: "Tasa" },
    { title: "Tasa Máxima", field: "TasaMaxima" },
  ];
  
  export const routesAhoTasaApi = {
    get: "AhoTasa/GetAhoTasas",
    add: "AhoTasa/PostAhoTasa",
    update: "AhoTasa/PutAhoTasa",
    delete: "AhoTasa/DeleteAhoTasa",
    navigation: "./AhoTasa",
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