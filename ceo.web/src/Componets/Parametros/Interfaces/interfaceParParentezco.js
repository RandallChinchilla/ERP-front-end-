//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente ParParentezco
 */

 export const columnsParParentezco = [
    {
        title: "Código Empresa",
        field: "CodigoEmpresa",
        initialEditValue: 1,//userData.codigoEmpresa,
        editable: "never",
      },
      {
        title: "Nombre",
        field: "CodigoEmpresaNavigation.Nombre",
        id: "CodigoEmpresaNavigation.CodigoEmpresa",
        initialEditValue: "DmdInterSoft", //userData.nombreEmpresa,
        editable: "never",
      },
      {
        title: "Parentezco",
        field: "CodigoParentezco",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesParParentezcoApi = {
  get: "ParParentezco/GetParParentezcos",
  add: "ParParentezco/PostParParentezco",
  update: "ParParentezco/PutParParentezco",
  delete: "ParParentezco/DeleteParParentezco",
};

export const tableStyle = {
  rowStyle: {
    fontSize: 12,
  },
  headerStyle: {
    backgroundColor: "#898883",
    color: "#FFF",
    fontSize: 13,
  },
};