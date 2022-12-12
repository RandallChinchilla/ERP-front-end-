export const columnsAhoProducto = [
  {
    headerName: "Tipo",
    field: "CodigoTipo",
    width: 275,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo1.Descripcion,
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 275,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo.Descripcion,
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 275,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoEstadoNavigation.Descripcion,
  },
];

export const routesAhoProductoApi = {
  get: "AhoProducto/GetAhoProductos",
  post: "AhoProducto/PostAhoProducto",
  update: "AhoProducto/PutAhoProducto",
  delete: "AhoProducto/DeleteAhoProducto",
  navigation: "./AhoProducto",
  navigationBack: "./AhoProductoView",
};

export const typeMode = {
  onlyread: false,
  deleteButton: false,
  editeButton: false,
  addButton: false,
};
