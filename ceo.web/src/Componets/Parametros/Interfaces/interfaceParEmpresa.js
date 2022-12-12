export const columnsParEmpresa = [
  {
    headerName: "Código Empresa",
    field: "CodigoEmpresa",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Nombre",
    field: "Nombre",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Número Id",
    field: "NumeroId",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 275,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesParEmpresaApi = {
  get: "ParEmpresa/GetParEmpresas",
  post: "ParEmpresa/PostParEmpresa",
  update: "ParEmpresa/PutParEmpresa",
  delete: "ParEmpresa/DeleteParEmpresa",
  navigation: "./ParEmpresa",
  navigationBack: "./ParEmpresaView",
};

export const typeMode = {
  onlyread: false,
};