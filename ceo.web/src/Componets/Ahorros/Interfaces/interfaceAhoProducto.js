export const columnsAhoProducto = [
  {
    headerName: "Tipo",
    field: "CodigoTipo",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 300,
    headerAlign: "center",
    align: "center",
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
};
