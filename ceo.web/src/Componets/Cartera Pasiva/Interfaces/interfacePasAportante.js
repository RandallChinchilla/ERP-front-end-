export const columnsPasAportante = [
  {
    headerName: "Aportante",
    field: "CodigoAportante",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Nombre Aportante",
    field: "Nombre",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Código Interno",
    field: "CodigoInterno",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Teléfono",
    field: "TelefonoCelular",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Dirección",
    field: "DireccionDomicilio",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Correo",
    field: "EMailAportante",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
];

export const columnsPasAportanteModal = [
  {
    headerName: "Aportante",
    field: "CodigoAportante",
  },
  {
    headerName: "Nombre Aportante",
    field: "Nombre",
    width: 175,
    headerAlign: "center",
    align: "center",
  },
];

export const routesPasAportanteApi = {
  get: "PasAportante/GetPasAportantes",
  post: "PasAportante/PostPasAportante",
  update: "PasAportante/PutPasAportante",
  delete: "PasAportante/DeletePasAportante",
  navigation: "./PasAportante",
  navigationBack: "./PasAportanteView",
};

export const typeMode = {
  onlyread: false,
};
