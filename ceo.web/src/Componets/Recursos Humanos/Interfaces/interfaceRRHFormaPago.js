export const columnsRRHFormaPago = [
    {
      headerName: "Código Forma Pago",
      field: "CodigoFormaPago",
      width: 550,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Descripción",
      field: "Descripcion",
      width: 550,
      headerAlign: "center",
      align: "center",
    },
  ];
  
  export const routesRRHFormaPagoApi = {
    get: "RrhFormaPago/GetRrhFormasPago",
    post: "RrhFormaPago/PostRrhFormaPago",
    update: "RrhFormaPago/PutRrhFormaPago",
    delete: "RrhFormaPago/DeleteRrhFormaPago",
    navigation: "./RrhFormaPago",
    navigationBack: "./RrhFormaPagoView",
  };
  
  export const typeMode = {
    onlyread: false,
  };