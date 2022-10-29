export const columnsPasTasaPlazo = [
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
    title: "Código Tipo",
    field: "CodigoTipo",
  },
  {
    title: "Fecha",
    field: "FechaHora",
  },
  {
    title: "Tasa Bruta",
    field: "Tasa",
  },
  {
    title: "Estado",
    field: "CodigoEstado",
  },
];

export const routesPasTasaPlazoApi = {
  get: "PasTasaPlazo/GetPasTasaPlazos",
  post: "PasTasaPlazo/PostPasTasaPlazo",
  update: "PasTasaPlazo/PutPasTasaPlazo",
  delete: "PasTasaPlazo/DeletePasTasaPlazo",
  navigation: "./PasTasaPlazo",
  navigationBack: "./PasTasaPlazoView",
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
