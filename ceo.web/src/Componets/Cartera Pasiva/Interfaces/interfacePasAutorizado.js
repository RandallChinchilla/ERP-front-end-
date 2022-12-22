export const columnsPasAutorizado = [
  {
    headerName: "Tipo Identificación",
    field: "CodigoTipoIdentificacion",
    width: 225,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoTipoIdentificacionNavigation.Descripcion,
  },
  {
    headerName: "Número Id",
    field: "NumeroId",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Primer Apellido",
    field: "Apellido1",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Segundo Apellido",
    field: "Apellido2",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 225,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesPasAutorizadoApi = {
  get: "PasAutorizado/GetPasAutorizados",
  post: "PasAutorizado/PostPasAutorizado",
  update: "PasAutorizado/PutPasAutorizado",
  delete: "PasAutorizado/DeletePasAutorizado",
  navigation: "./PasAutorizado",
  navigationBack: "./PasAutorizadoView",
};

export const typeMode = {
  onlyread: false,
};