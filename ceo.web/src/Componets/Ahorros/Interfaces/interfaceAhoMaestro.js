export const columnsAhoMaestro = [
  {
    headerName: "Portafolio",
    field: "CodigoPortafolio",
    width: 175,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo2.Descripcion,
  },
  {
    headerName: "Numero Inversión",
    field: "NumeroInversion",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Aportante",
    field: "CodigoAportante",
    width: 175,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo.Nombre,
  },
  {
    headerName: "Tipo",
    field: "CodigoTipo",
    width: 175,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo3.Descripcion,
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 175,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoNavigation.Descripcion,
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 175,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesAhoMaestroApi = {
  get: "AhoMaestro/GetAhoMaestros",
  post: "AhoMaestro/PostAhoMaestro",
  update: "AhoMaestro/PutAhoMaestro",
  delete: "AhoMaestro/DeleteAhoMaestro",
  navigation: "./AhoMaestro",
  navigationBack: "./AhoMaestroView",
};

export const typeMode = {
  onlyread: true,
  deleteButton: false,
  editeButton: false,
  addButton: false,
};
