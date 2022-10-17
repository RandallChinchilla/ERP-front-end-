export const columnsRRHTipoDeduccion = [
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
      title: "Código Tipo Deducción",
      field: "CodigoTipoDeduccion",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Estado",
      field: "CodigoEstado",
    },
  ];
  
  export const routesRRHTipoDeduccionApi = {
    get: "RrhTipoDeduccion/GetRrhTiposDeduccion",
    post: "RrhTipoDeduccion/PostRrhTipoDeduccion",
    update: "RrhTipoDeduccion/PutRrhTipoDeducciono",
    delete: "RrhTipoDeduccion/DeleteRrhTipoDeduccion",
    navigation: "./RrhTipoDeduccion",
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