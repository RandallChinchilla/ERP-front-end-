export const columnsParTipoIdentificacion = [
  {
    headerName: "Código Tipo de Identificación",
    field: "CodigoTipoIdentificacion",
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

export const routesParTipoIdentificacionApi = {
  get: "ParTipoidentificacion/GetParTiposIdentificacion",
  post: "ParTipoIdentificacion/PostParTipoIdentificacion",
  update: "ParTipoIdentificacion/PutParTipoIdentificacion",
  delete: "ParTipoIdentificacion/DeleteParTipoIdentificacion",
  navigation: "./ParTipoIdentificacion",
  navigationBack: "./ParTipoIdentificacionView",
};

export const typeMode = {
  onlyread: false,
};