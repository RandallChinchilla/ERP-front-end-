export const columnsAhoMaestro = [
  {
    headerName: "Portafolio",
    field: "CodigoPortafolio",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Numero Inversión",
    field: "NumeroInversion",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Aportante",
    field: "CodigoAportante",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tipo",
    field: "CodigoTipo",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 300,
    headerAlign: "center",
    align: "center",
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
  onlyread: false,
};
