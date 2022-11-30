export const columnsRRHTipoDeduccion = [
  {
    headerName: "Código Tipo Deducción",
    field: "CodigoTipoDeduccion",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 350,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesRRHTipoDeduccionApi = {
  get: "RrhTipoDeduccion/GetRrhTiposDeduccion",
  post: "RrhTipoDeduccion/PostRrhTipoDeduccion",
  update: "RrhTipoDeduccion/PutRrhTipoDeducciono",
  delete: "RrhTipoDeduccion/DeleteRrhTipoDeduccion",
  navigation: "./RrhTipoDeduccion",
  navigationBack: "./RrhTipoDeduccionView",
};

export const typeMode = {
  onlyread: false,
};