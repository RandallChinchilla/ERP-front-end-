export const columnsParTipoCambio = [
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
    title: "Fecha Hora",
    field: "FechaHora",
  },
  {
    title: "Moneda",
    field: "CodigoMoneda",
  },
  {
    title: "Estado",
    field: "CodigoEstado",
  },
];

export const routesParTipoCambioApi = {
  get: "ParTipoCambio/GetParTiposCambio",
  post: "ParTipoCambio/PostParTipoCambio",
  update: "ParTipoCambio/PutParTipoCambio",
  delete: "ParTipoCambio/DeleteParTipoCambio",
  navigation: "./ParTipoCambio",
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