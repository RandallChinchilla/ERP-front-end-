export const columnsParDistrito = [
  {
    headerName: "Código País",
    field: "CodigoPais",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Código Provincia",
    field: "CodigoProvincia",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Código Cantón",
    field: "CodigoCanton",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Código Distrito",
    field: "CodigoDistrito",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
];

export const routesParDistritoApi = {
  get: "ParDistrito/GetParDistritos",
  post: "ParDistrito/PostParDistrito",
  update: "ParDistrito/PutParDistrito",
  delete: "ParDistrito/DeleteParDistrito",
  navigation: "./ParDistrito",
  navigationBack: "./ParDistritoView",
};

export const typeMode = {
  onlyread: false,
};