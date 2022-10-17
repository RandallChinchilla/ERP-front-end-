//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente RRHEstado
 */

 export const columnsRRHEstado = [
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
        title: "Código Estado",
        field: "CodigoEstado",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesRRHEstadoApi = {
  get: "RrhEstado/GetRrhEstados",
  add: "RrhEstado/PostRrhEstado",
  update: "RrhEstado/PutRrhEstadoo",
  delete: "RrhEstado/DeleteRrhEstado",
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