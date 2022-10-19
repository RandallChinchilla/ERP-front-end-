export const columnsPasMaestro = [
  {
    title: "Código Empresa",
    field: "CodigoEmpresaNavigation.CodigoEmpresa",
  },
  {
    title: "Nombre Empresa",
    field: "CodigoEmpresaNavigation.Nombre",
  },
  {
    title: "Código Portafolio",
    field: "CodigoPortafolio",
  },
  {
    title: "Número Inversion",
    field: "NumeroInversion",
  },
  {
    title: "Código Aportante",
    field: "CodigoAportante",
  },
  {
    title: "Código Instrumento",
    field: "CodigoInstrumento",
  },
  {
    title: "Moneda",
    field: "CodigoMoneda",
  },
  {
    title: "Estado",
    field: "CodigoEstado",
  },
  {
    title: "Saldo Nominal",
    field: "SaldoValorNominal",
  },
];

export const routesPasMaestroApi = {
  get: "PasMaestro/GetPasMaestros",
  post: "PasMaestro/PostPasMaestro",
  update: "PasMaestro/PutPasMaestro",
  delete: "PasMaestro/DeletePasMaestro",
  navigation: "./PasMaestro",
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
