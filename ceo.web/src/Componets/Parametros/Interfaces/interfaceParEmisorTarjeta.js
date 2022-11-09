//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente ParEmisorTarjeta
 */

 export const columnsParEmisorTarjeta = [
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
        title: "Emisor",
        field: "CodigoEmisor",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesParEmisorTarjetaApi = {
  get: "ParEmisorTarjeta/GetParEmisorTarjetas",
  add: "ParEmisorTarjeta/PostParEmisorTarjeta",
  update: "ParEmisorTarjeta/PutParEmisorTarjeta",
  delete: "ParEmisorTarjeta/DeleteParEmisorTarjeta",
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