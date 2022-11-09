export const columnsRRHPariente = [
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
    },
    {
      title: "Empresa",
      field: "Codigo.CodigoEmpresaNavigation.Nombre",
      id: "Codigo.CodigoEmpresaNavigation.CodigoEmpresa",
    },
    {
      title: "Número Empleado",
      field: "NumeroEmpleado",
    },
    {
      title: "Nombre",
      field: "Nombre",
    },
    {
      title: "Parentezco",
      field: "Codigo.Descripcion",
      id: "Codigo.CodigoParentezco",
    },
  ];
  
  export const routesRRHParienteApi = {
    get: "RrhPariente/GetRrhParientes",
    post: "RrhPariente/PostRrhPariente",
    update: "RrhPariente/PutRrhPariente",
    delete: "RrhPariente/DeleteRrhPariente",
    navigation: "./RrhPariente",
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