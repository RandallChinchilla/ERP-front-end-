export const columnsParEstadoCivil = [
  {
    headerName: "Código Estado Civil",
    field: "CodigoEstadoCivil",
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

export const routesParEstadoCivilApi = {
  get: "ParEstadoCivil/GetParEstadosCiviles",
  post: "ParEstadoCivil/PostParEstadoCivil",
  update: "ParEstadoCivil/PutParEstadoCivil",
  delete: "ParEstadoCivil/DeleteParEstadoCivil",
  navigation: "./ParEstadoCivil",
  navigationBack: "./ParEstadoCivilView",
};

export const typeMode = {
  onlyread: false,
};