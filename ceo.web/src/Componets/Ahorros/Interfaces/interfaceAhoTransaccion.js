export const columnsAhoTransaccion = [
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
        title: "Número Transacción",
        field: "NumeroTransaccion",
      },
      {
        title: "Numero Inversión",
        field: "NumeroInversion",
      },
      {
        title: "Transacción",
        field: "CodigoTransaccion",
      },
      {
        title: "Moneda",
        field: "CodigoMoneda",
      },
      {
        title: "Monto Efectivo",
        field: "MontoEfectivo",
      },
      {
        title: "Monto Cheque",
        field: "MontoCheque",
      },
      {
        title: "Monto Tarjeta",
        field: "MontoTarjeta",
      },
      {
        title: "Monto Otros",
        field: "MontoOtros",
      },
      {
        title: "Fecha Ingreso",
        field: "FechaIngreso",
      },
      {
        title: "Fecha Efectiva",
        field: "FechaEfectiva",
      },
      {
        title: "Fecha Reversión",
        field: "FechaReversion",
      },
  ];
  
  export const routesAhoTransaccionApi = {
    get: "AhoTransaccion/GetAhoTransacciones",
    post: "AhoTransaccion/PostAhoTransaccion",
    update: "AhoTransaccion/PutAhoTransaccion",
    delete: "AhoTransaccion/DeleteAhoTransaccion",
    navigation: "./AhoTransaccion",
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
  