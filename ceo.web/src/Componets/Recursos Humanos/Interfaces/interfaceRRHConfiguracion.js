export const columnsRRHConfiguracion = [
  {
    headerName: "Fecha Hora",
    field: "FechaHora",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 550,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesRRHConfiguracionApi = {
  get: "RrhConfiguracion/GetRrhConfiguraciones",
  post: "RrhConfiguracion/PostRrhConfiguracion",
  update: "RrhConfiguracion/PutRrhConfiguracion",
  delete: "RrhConfiguracion/DeleteRrhConfiguracion",
  navigation: "./RrhConfiguracion",
  navigationBack: "./RrhConfiguracionView",
};

export const typeMode = {
  onlyread: false,
};