export const columnsPasMaestro = [
  {
    headerName: "Código Portafolio",
    field: "CodigoPortafolio",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo3.Descripcion,
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
    width: 350,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo.Nombre,
  },
  {
    headerName: "Código Instrumento",
    field: "CodigoInstrumento",
    width: 200,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoNavigation.Descripcion,
  },
  {
    headerName: "Moneda",
    field: "Nombre",
    width: 100,
    headerAlign: "center",
    align: "center",
    field: "CodigoMoneda",
    valueGetter: (params) => params.row.Codigo1.Descripcion,
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 100,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
  {
    headerName: "Saldo Nominal",
    field: "SaldoValorNominal",
    width: 150,
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
