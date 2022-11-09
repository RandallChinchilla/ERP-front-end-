//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente ParDistrito
 */

 export const columnsParDistrito = [
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
      { title: "Código País", field: "CodigoPais" },
      { title: "Código Provincia", field: "CodigoProvincia" },
      { title: "Código Cantón", field: "CodigoCanton" },
      { title: "Código Distrito", field: "CodigoDistrito" },
      { title: "Descripción", field: "Descripcion" },
];

export const routesParDistritoApi = {
  get: "ParDistrito/GetParDistritos",
  add: "ParDistrito/PostParDistrito",
  update: "ParDistrito/PutParDistrito",
  delete: "ParDistrito/DeleteParDistrito",
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