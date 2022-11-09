//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente ParPeriodicidad
 */

 export const columnsParPeriodicidad = [
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
        title: "Periodicidad",
        field: "CodigoPeriodicidad",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Meses", field: "CantidadMeses" },
      { title: "Descripción", field: "Descripcion" },
];

export const routesParPeriodicidadApi = {
  get: "ParPeriodicidad/GetParPeriodicidades",
  add: "ParPeriodicidad/PostParPeriodicidad",
  update: "ParPeriodicidad/PutParPeriodicidad",
  delete: "ParPeriodicidad/DeleteParPeriodicidad",
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