export const columnsParDiocesis = [
  {
    headerName: "Código Diócesis",
    field: "CodigoDiocesis",
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

export const routesParDiocesisApi = {
  get: "ParDiocesis/GetListaParDiocesis",
  post: "ParDiocesis/PostParDiocesis",
  update: "ParDiocesis/PutParDiocesis",
  delete: "ParDiocesis/DeleteParDiocesis",
  navigation: "./ParDiocesis",
  navigationBack: "./ParDiocesisView",
};

export const typeMode = {
  onlyread: false,
};