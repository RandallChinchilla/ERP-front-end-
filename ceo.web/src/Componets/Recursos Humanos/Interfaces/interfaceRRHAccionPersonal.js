export const columnsRRHAccionPersonal = [
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
      title: "Tipo Acción",
      field: "CodigoTipoAccion",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
    {
      title: "Estado",
      field: "CodigoEstadoNavigation.Descripcion",
      id: "CodigoEstadoNavigation.CodigoEstado",
    }
  ];
  
  export const routesRRHAccionPersonalApi = {
    get: "RrhAccionPersonal/GetRrhAccionesPersonales",
    post: "RrhAccionPersonal/PostRrhAccionPersonal",
    update: "RrhAccionPersonal/PutRrhAccionPersonal",
    delete: "RrhAccionPersonal/DeleteRrhAccionPersonal",
    navigation: "./RrhAccionPersonal",
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