const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente PasOrigenAportante
 */

export const columnsPasOrigenAportante = [
  {
    title: "Código Empresa",
    field: "CodigoEmpresa",
    initialEditValue: userData.codigoEmpresa,
    editable: "never",
  },
  {
    title: "Nombre",
    field: "CodigoEmpresaNavigation.Nombre",
    id: "CodigoEmpresaNavigation.CodigoEmpresa",
    initialEditValue: userData.nombreEmpresa,
    editable: "never",
  },
  {
    title: "Código Origen Aportante",
    field: "CodigoOrigenAportante",
    initialEditValue: 0,
    editable: "never",
  },
  { title: "Descripción", field: "Descripcion" },
];

export const routesPasOrigenAportanteApi = {
  get: "PasOrigenAportante/GetPasOrigenAportantes",
  add: "PasOrigenAportante/PostPasOrigenAportante",
  update: "PasOrigenAportante/PutPasOrigenAportante",
  delete: "PasOrigenAportante/DeletePasOrigenAportante",
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
