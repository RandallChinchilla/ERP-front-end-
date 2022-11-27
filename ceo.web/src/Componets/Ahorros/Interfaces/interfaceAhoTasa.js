export const columnsAhoTasa = [
  {
    headerName: "Tipo",
    field: "CodigoTipo",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tasa",
    field: "Tasa",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tasa Máxima",
    field: "TasaMaxima",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
];

export const routesAhoTasaApi = {
  get: "AhoTasa/GetAhoTasas",
  post: "AhoTasa/PostAhoTasa",
  update: "AhoTasa/PutAhoTasa",
  delete: "AhoTasa/DeleteAhoTasa",
  navigation: "./AhoTasa",
  navigationBack: "./AhoTasaView",
};

export const typeMode = {
  onlyread: false,
};
