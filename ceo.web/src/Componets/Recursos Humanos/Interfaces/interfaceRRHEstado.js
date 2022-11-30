export const columnsRRHEstado = [
  {
    headerName: "Código Estado",
    field: "CodigoEstado",
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

export const routesRRHEstadoApi = {
  get: "RrhEstado/GetRrhEstados",
  post: "RrhEstado/PostRrhEstado",
  update: "RrhEstado/PutRrhEstado",
  delete: "RrhEstado/DeleteRrhEstado",
  navigation: "./RrhEstado",
  navigationBack: "./RrhEstadoView",
};

export const typeMode = {
  onlyread: false,
};