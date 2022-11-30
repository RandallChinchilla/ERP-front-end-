export const columnsRRHAccionPersonal = [
  {
    headerName: "Código Tipo Acción",
    field: "CodigoTipoAccion",
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
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 350,
    headerAlign: "center",
    align: "center",
    // valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesRRHAccionPersonalApi = {
  get: "RrhAccionPersonal/GetRrhAccionpersonals",
  post: "RrhAccionPersonal/PostRrhAccionPersonal",
  update: "RrhAccionPersonal/PutRrhAccionPersonal",
  delete: "RrhAccionPersonal/DeleteRrhAccionPersonal",
  navigation: "./RrhAccionPersonal",
  navigationBack: "./RrhAccionPersonalView",
};

export const typeMode = {
  onlyread: false,
};