//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente RRHMotivoSalida
 */

export const columnsRRHMotivoSalida = [
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
        initialEditValue: "DmdInterSoft",//userData.nombreEmpresa,
        editable: "never",
      },
      {
        title: "Código Motivo Salida",
        field: "CodigoMotivoSalida",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesRRHMotivoSalidaApi = {
  get: "RrhMotivoSalida/GetRrhMotivosSalida",
  add: "RrhMotivoSalida/PostRrhMotivoSalida",
  update: "RrhMotivoSalida/PutRrhMotivoSalida",
  delete: "RrhMotivoSalida/DeleteRrhMotivoSalida",
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