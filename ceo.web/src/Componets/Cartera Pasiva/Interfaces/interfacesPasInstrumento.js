export const columnsPasInstrumento = [
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
    title: "Código Instrumento",
    field: "CodigoInstrumento",
  },
  {
    title: "Descripción",
    field: "Descripcion",
  },
  {
    title: "Moneda",
    field: "CodigoMoneda",
  },
  {
    title: "Periodicidad Pago Interés",
    field: "CodigoNavigation.Descripcion",
    id: "CodigoNavigation.CodigoPeriodicidad",
  },
  {
    title: "Periodicidad Revisión Tasa",
    field: "CodigoNavigation.Descripcion",
    id: "CodigoNavigation.CodigoPeriodicidad",
  },
];

export const routesPasInstrumentoApi = {
  get: "PasInstrumento/GetPasInstrumentos",
  post: "PasInstrumento/PostPasInstrumento",
  update: "PasInstrumento/PutPasInstrumento",
  delete: "PasInstrumento/DeletePasInstrumento",
  navigation: "./PasInstrumento",
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
