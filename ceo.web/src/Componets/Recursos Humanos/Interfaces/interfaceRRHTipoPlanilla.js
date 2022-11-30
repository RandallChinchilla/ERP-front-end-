export const columnsRRHTipoPlanilla = [
  {
    headerName: "Código Tipo Planilla",
    field: "CodigoTipoPlanilla",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
];

export const routesRRHTipoPlanillaApi = {
  get: "RrhTipoPlanilla/GetRrhTiposPlanilla",
  post: "RrhTipoPlanilla/PostRrhTipoPlanilla",
  update: "RrhTipoPlanilla/PutRrhTipoPlanilla",
  delete: "RrhTipoPlanilla/DeleteRrhTipoPlanilla",
  navigation: "./RrhTipoPlanilla",
  navigationBack: "./RrhTipoPlanillaView",
};

export const typeMode = {
  onlyread: false,
};