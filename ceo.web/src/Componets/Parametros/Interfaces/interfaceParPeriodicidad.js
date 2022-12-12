export const columnsParPeriodicidad = [
  {
    headerName: "Código Periodicidad",
    field: "CodigoPeriodicidad",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Meses",
    field: "CantidadMeses",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 350,
    headerAlign: "center",
    align: "center",
  }
];

export const routesParPeriodicidadApi = {
  get: "ParPeriodicidad/GetParPeriodicidades",
  post: "ParPeriodicidad/PostParPeriodicidad",
  update: "ParPeriodicidad/PutParPeriodicidad",
  delete: "ParPeriodicidad/DeleteParPeriodicidad",
  navigation: "./ParPeriodicidad",
  navigationBack: "./ParPeriodicidadView",
};

export const typeMode = {
  onlyread: false,
};