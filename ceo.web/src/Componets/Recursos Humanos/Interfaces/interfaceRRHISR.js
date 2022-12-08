export const columnsRRHISR = [
  {
    headerName: "Consecutivo",
    field: "Consecutivo",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Fecha y Hora",
    field: "FechaHora",
    width: 350,
    headerAlign: "center",
    align: "center",
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

export const routesRRHISRApi = {
  get: "RrhIsr/GetListaRrhIsr",
  post: "RrhIsr/PostRrhIsr",
  update: "RrhIsr/PutRrhIsr",
  delete: "RrhIsr/DeleteRrhIsr",
  navigation: "./RrhIsr",
  navigationBack: "./RrhIsrView",
};

export const typeMode = {
  onlyread: true,
  deleteButton: true,
  editeButton: false,
  addButton: true,
};