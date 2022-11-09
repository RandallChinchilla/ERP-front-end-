//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente ParDiocesis
 */

 export const columnsParDiocesis = [
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
        title: "Diocesis",
        field: "CodigoDiocesis",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesParDiocesisApi = {
  get: "ParDiocesis/GetListaParDiocesis",
  add: "ParDiocesis/PostParDiocesis",
  update: "ParDiocesis/PutParDiocesis",
  delete: "ParDiocesis/DeleteParDiocesis",
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