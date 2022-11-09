//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente RRHCentroMedico
 */

export const columnsRRHCentroMedico = [
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
        title: "Código Centro Médico",
        field: "CodigoCentroMedico",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
      {
        title: "Estado",
        field: "CodigoEstado",
      }
];

export const routesRRHCentroMedicoApi = {
  get: "RrhCentroMedico/GetRrhCentrosMedicos",
  add: "RrhCentroMedico/PostRrhCentroMedico",
  update: "RrhCentroMedico/PutRrhCentroMedico",
  delete: "RrhCentroMedico/DeleteRrhCentroMedico",
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