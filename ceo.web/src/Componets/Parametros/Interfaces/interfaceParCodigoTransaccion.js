export const columnsParCodigoTransaccion = [
  {
    headerName: "Código Transacción",
    field: "CodigoTransaccion",
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

export const routesParCodigoTransaccionApi = {
  get: "ParCodigotransaccion/GetParCodigoTransacciones",
  post: "ParCodigotransaccion/PostParCodigotransaccion",
  update: "ParCodigotransaccion/PutParCodigotransaccion",
  delete: "ParCodigotransaccion/DeleteParCodigotransaccion",
  navigation: "./ParCodigotransaccion",
  navigationBack: "./ParCodigotransaccionView",
};

export const typeMode = {
  onlyread: false,
};