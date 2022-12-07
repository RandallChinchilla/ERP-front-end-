export const columnsAhoTipo = [
  {
    headerName: "Código Tipo Ahorro",
    field: "CodigoTipo",
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

export const routesAhoTipoApi = {
  get: "AhoTipo/GetAhoTipos",
  post: "AhoTipo/PostAhoTipo",
  update: "AhoTipo/PutAhoTipo",
  delete: "AhoTipo/DeleteAhoTipo",
  navigation: "./AhoTipo",
  navigationBack: "./AhoTipoView",
};

export const typeMode = {
  onlyread: false,
};