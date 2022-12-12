export const columnsParTipoCambio = [
  {
    headerName: "Fecha Hora",
    field: "FechaHora",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 350,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo.Descripcion,
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 350,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesParTipoCambioApi = {
  get: "ParTipoCambio/GetParTiposCambio",
  post: "ParTipoCambio/PostParTipoCambio",
  update: "ParTipoCambio/PutParTipoCambio",
  delete: "ParTipoCambio/DeleteParTipoCambio",
  navigation: "./ParTipoCambio",
  navigationBack: "./ParTipoCambioView",
};

export const typeMode = {
  onlyread: false,
  deleteButton: false,
  editeButton: false,
  addButton: false,
};