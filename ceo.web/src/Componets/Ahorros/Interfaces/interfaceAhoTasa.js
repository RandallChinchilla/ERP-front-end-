export const columnsAhoTasa = [
  {
    headerName: "Código Tipo Ahorro",
    field: "CodigoTipo",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tasa",
    field: "Tasa",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tasa Máxima",
    field: "TasaMaxima",
    width: 350,
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