// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente PasTransaccion
 */

 export const columnsPasTransaccion= [
    {
      headerName: "Empresa",
      field: "CodigoEmpresa",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "# Transacción",
      field: "NumeroTransaccion",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
        headerName: "# Inversión",
        field: "NumeroInversion",
        width: 100,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "# Transacción",
        field: "CodigoTransaccion",
        width: 100,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Moneda",
        field: "CodigoMoneda",
        width: 100,
        headerAlign: "center",
        align: "center",
        valueGetter: (params) => params.row.Codigo.Descripcion,
    },
    {
        headerName: "Monto Efectivo",
        field: "MontoEfectivo",
        width: 100,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Monto Cheque",
        field: "MontoCheque",
        width: 100,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Monto Tarjeta",
        field: "MontoTarjeta",
        width: 100,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Monto Otros",
        field: "MontoOtros",
        width: 100,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Fecha Ingreso",
        field: "FechaIngreso",
        width: 175,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Fecha Efectiva",
        field: "FechaEfectiva",
        width: 175,
        headerAlign: "center",
        align: "center",
    },
    {
        headerName: "Fecha Reversión",
        field: "FechaReversion",
        width: 175,
        headerAlign: "center",
        align: "center",
    },
  ];
  
  export const routesPasTransaccionApi = {
    get: "PasTransaccion/GetPasTransacciones",
    post: "PasTransaccion/PostPasTransaccion",
    update: "PasTransaccion/PutPasTransaccion",
    delete: "PasTransaccion/DeletePasTransaccion",
    navigation: "./PasTransaccion",
    navigationBack: "./PasTransaccionView",
  };
  
  export const typeMode = {
    onlyread: false,
  };
  