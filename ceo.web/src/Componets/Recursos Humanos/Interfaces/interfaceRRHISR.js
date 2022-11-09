export const columnsRRHISR = [
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Empresa",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
    },
    { title: "Consecutivo", field: "Consecutivo" },
    {
      title: "Fecha y Hora",
      field: "FechaHora",
    },
    {
      title: "Estado",
      field: "CodigoEstadoNavigation.Descripcion",
      id: "CodigoEstadoNavigation.CodigoEstado",
    },
  ];
  
  export const routesRRHISRApi = {
    get: "RrhIsr/GetListaRrhIsr",
    post: "RrhIsr/PostRrhIsr",
    update: "RrhIsr/PutRrhIsr",
    delete: "RrhIsr/DeleteRrhIsr",
    navigation: "./RrhIsr",
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