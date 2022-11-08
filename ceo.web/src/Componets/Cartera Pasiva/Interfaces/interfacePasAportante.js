export const columnsPasAportante = [
  {
    title: "Código Empresa",
    field: "CodigoEmpresa",
  },
  {
    title: "Empresa",
    field: "NombreEmpresa",
  },
  {
    title: "Nombre Aportante",
    field: "Nombre",
  },
  {
    title: "Teléfono",
    field: "TelefonoCelular",
  },
  {
    title: "Dirección",
    field: "DireccionDomicilio",
  },
  {
    title: "Correo",
    field: "EMailAportante",
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

export const tableStyle = {
  rowStyle: {
    fontSize: 12,
  },
  headerStyle: {
    backgroundColor: "#898883",
    color: "#FFF",
    fontSize: 13,
  },
};
