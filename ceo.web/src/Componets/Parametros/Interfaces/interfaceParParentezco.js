export const columnsParParentezco = [
  {
    headerName: "Código Parentezco",
    field: "CodigoParentezco",
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

export const routesParParentezcoApi = {
  get: "ParParentezco/GetParParentezcos",
  post: "ParParentezco/PostParParentezco",
  update: "ParParentezco/PutParParentezco",
  delete: "ParParentezco/DeleteParParentezco",
  navigation: "./ParParentezco",
  navigationBack: "./ParParentezcoView",
};

export const typeMode = {
  onlyread: false,
};