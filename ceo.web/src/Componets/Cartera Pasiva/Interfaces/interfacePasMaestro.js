export const columnsPasMaestro = [
  {
    headerName: "Código Portafolio",
    field: "CodigoPortafolio",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Número Inversion",
    field: "NumeroInversion",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Código Aportante",
    field: "CodigoAportante",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Código Instrumento",
    field: "CodigoInstrumento",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "Nombre",
    width: 100,
    headerAlign: "center",
    align: "center",
    field: "CodigoMoneda",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Saldo Nominal",
    field: "SaldoValorNominal",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
];

export const routesPasMaestroApi = {
  get: "PasMaestro/GetPasMaestros",
  post: "PasMaestro/PostPasMaestro",
  update: "PasMaestro/PutPasMaestro",
  delete: "PasMaestro/DeletePasMaestro",
  navigation: "./PasMaestro",
  navigationBack: "./PasMaestroView",
};

export const typeMode = {
  onlyread: false,
};
