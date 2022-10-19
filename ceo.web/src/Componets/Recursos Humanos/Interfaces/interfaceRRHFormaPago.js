export const columnsRRHFormaPago = [
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
      title: "Código Forma Pago",
      field: "CodigoFormaPago",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },
  ];
  
  export const routesRRHFormaPagoApi = {
    get: "RrhFormaPago/GetRrhFormasPago",
    post: "RrhFormaPago/PostRrhFormaPago",
    update: "RrhFormaPago/PutRrhFormaPago",
    delete: "RrhFormaPago/DeleteRrhFormaPago",
    navigation: "./RrhFormaPago",
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