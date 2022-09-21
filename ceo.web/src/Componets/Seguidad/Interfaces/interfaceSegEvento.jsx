//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente AhoTipo
 */

export const columnsSegEvento = [
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
      { title: "Código Tipo Ahorro", field: "CodigoTipo" },
      { title: "Descripción", field: "Descripcion" },
];

export const routesSegEventoApi = {
  get: "SegEvento/GetSegEventos",
  add: "SegEvento/PostSegEvento",
  update: "SegEvento/PutSegEvento",
  delete: "SegEvento/DeleteSegEvento",
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