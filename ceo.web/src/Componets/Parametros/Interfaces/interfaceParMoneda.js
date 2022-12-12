export const columnsParMoneda = [
  {
    headerName: "Código Moneda",
    field: "CodigoMoneda",
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

export const routesParMonedaApi = {
  get: "ParMonedum/GetParMonedas",
  post: "ParMonedum/PostParMoneda",
  update: "ParMonedum/PutParMoneda",
  delete: "ParMonedum/DeleteParMoneda",
  navigation: "./ParMoneda",
  navigationBack: "./ParMonedaView",
};

export const typeMode = {
  onlyread: false,
};