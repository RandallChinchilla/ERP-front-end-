export const columnsPasAutorizado = [
  {
    title: "Código Empresa",
    field: "CodigoEmpresa",
  },
  {
    title: "Empresa",
    field: "CodigoEmpresaNavigation.Nombre",
    id: "CodigoEmpresaNavigation.CodigoEmpresa",
  },
  {
    title: "Tipo Identificación",
    field: "CodigoTipoIdentificacion",
  },
  {
    title: "Número Id",
    field: "NumeroId",
  },
  {
    title: "Primer Apellido",
    field: "Apellido1",
  },
  {
    title: "Segundo Apellido",
    field: "Apellido2",
  },
  {
    title: "Estado",
    field: "CodigoEstado",
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
