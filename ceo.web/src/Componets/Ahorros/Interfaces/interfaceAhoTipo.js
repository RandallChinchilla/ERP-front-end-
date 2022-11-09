//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente AhoTipo
 */

export const columnsAhoTipo = [
    {
        title: "Código Empresa",
        field: "CodigoEmpresa",
        initialEditValue: 1, //userData.codigoEmpresa,
        editable: "never",
      },
      {
        title: "Nombre",
        field: "CodigoEmpresaNavigation.Nombre",
        id: "CodigoEmpresaNavigation.CodigoEmpresa",
        initialEditValue: "DmdInterSoft", //userData.nombreEmpresa,
        editable: "never",
      },
      { title: "Código Tipo Ahorro", field: "CodigoTipo", initialEditValue: 0, editable: "never", },
      { title: "Descripción", field: "Descripcion" },
];

export const routesAhoTipoApi = {
  get: "AhoTipo/GetAhoTipos",
  add: "AhoTipo/PostAhoTipo",
  update: "AhoTipo/PutAhoTipo",
  delete: "AhoTipo/DeleteAhoTipo",
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