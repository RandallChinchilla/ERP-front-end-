export const columnsRRHTipoPlanilla = [
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
      title: "Código Tipo Planilla",
      field: "CodigoTipoPlanilla",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ];
  
  export const routesRRHTipoPlanillaApi = {
    get: "RrhTipoPlanilla/GetRrhTiposPlanilla",
    post: "RrhTipoPlanilla/PostRrhTipoPlanilla",
    update: "RrhTipoPlanilla/PutRrhTipoPlanilla",
    delete: "RrhTipoPlanilla/DeleteRrhTipoPlanilla",
    navigation: "./RrhTipoPlanilla",
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