// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente AhoProductoLog
 */

 export const columnsAhoProductoLog= [
  {
    headerName: "Empresa",
    field: "CodigoEmpresa",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
      headerName: "Tipo",
      field: "CodigoTipo",
      width: 100,
      headerAlign: "center",
      align: "center",
  },
  {
      headerName: "Descripción",
      field: "Descripcion",
      width: 100,
      headerAlign: "center",
      align: "center",
  },
  {
      headerName: "Moneda",
      field: "CodigoMoneda",
      width: 100,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.Codigo.Descripcion,
  },
  {
      headerName: "Estado",
      field: "CodigoEstado",
      width: 100,
      headerAlign: "center",
      align: "center",
  },
];

export const routesAhoProductoLogApi = {
  get: "AhoProductoLog/GetAhoProductosLog",
  post: "AhoProductoLog/PostAhoProductoLog",
  update: "AhoProductoLog/PutAhoProductoLog",
  delete: "AhoProductoLog/DeleteAhoProductoLog",
  navigation: "./AhoProductoLog",
  navigationBack: "./AhoProductoLogView",
};

export const typeMode = {
  onlyread: false,
};