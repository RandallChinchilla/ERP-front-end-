//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente ParEstadoCivil
 */

 export const columnsParEstadoCivil = [
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
        title: "Estado Civil",
        field: "CodigoEstadoCivil",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesParEstadoCivilApi = {
  get: "ParEstadoCivil/GetParEstadosCiviles",
  add: "ParEstadoCivil/PostParEstadoCivil",
  update: "ParEstadoCivil/PutParEstadoCivil",
  delete: "ParEstadoCivil/DeleteParEstadoCivil",
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