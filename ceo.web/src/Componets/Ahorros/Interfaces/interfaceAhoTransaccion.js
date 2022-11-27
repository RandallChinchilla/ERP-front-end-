export const columnsAhoTransaccion = [
  {
    headerName: "Número Transacción",
    field: "NumeroTransaccion",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Numero Inversión",
    field: "NumeroInversion",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Transacción",
    field: "CodigoTransaccion",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Monto Efectivo",
    field: "MontoEfectivo",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Monto Cheque",
    field: "MontoCheque",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Monto Tarjeta",
    field: "MontoTarjeta",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Monto Otros",
    field: "MontoOtros",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Fecha Ingreso",
    field: "FechaIngreso",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Fecha Efectiva",
    field: "FechaEfectiva",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Fecha Reversión",
    field: "FechaReversion",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
];

export const routesAhoTransaccionApi = {
  get: "AhoTransaccion/GetAhoTransacciones",
  post: "AhoTransaccion/PostAhoTransaccion",
  update: "AhoTransaccion/PutAhoTransaccion",
  delete: "AhoTransaccion/DeleteAhoTransaccion",
  navigation: "./AhoTransaccion",
  navigationBack: "./AhoTransaccionView",
};

export const typeMode = {
  onlyread: "false",
};
