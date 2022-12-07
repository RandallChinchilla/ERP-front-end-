export const columnsParEmisorTarjeta = [
  {
    headerName: "Código Emisor",
    field: "CodigoEmisor",
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

export const routesParEmisorTarjetaApi = {
  get: "ParEmisorTarjeta/GetParEmisorTarjetas",
  post: "ParEmisorTarjeta/PostParEmisorTarjeta",
  update: "ParEmisorTarjeta/PutParEmisorTarjeta",
  delete: "ParEmisorTarjeta/DeleteParEmisorTarjeta",
  navigation: "./ParEmisorTarjeta",
  navigationBack: "./ParEmisorTarjetaView",
};

export const typeMode = {
  onlyread: false,
};