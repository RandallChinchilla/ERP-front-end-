export const columnsRRHMaestro = [
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
      title: "Número Empleado",
      field: "NumeroEmpleado",
    },
    {
      title: "Número Id",
      field: "NumeroId",
    },
    {
      title: "Nombre",
      field: "Nombre",
    },
    {
      title: "Primer Apellido",
      field: "Apellido1",
    },
    {
      title: "Segundo Apellido",
      field: "Apellido2",
    },
  ];
  
  export const routesRRHMaestroApi = {
    get: "RrhMaestro/GetRrhMaestros",
    post: "RrhMaestro/PostRrhMaestro",
    update: "RrhMaestro/PutRrhMaestro",
    delete: "RrhMaestro/DeleteRrhMaestro",
    navigation: "./RrhMaestro",
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