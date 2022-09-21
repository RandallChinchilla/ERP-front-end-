//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente SegProceso
 */

export const columnsSegProceso = [
      { title: "Código", field: "idProceso" },
      { title: "Descripción", field: "Descripcion" },
];

export const routesSegProcesoApi = {
  get: "SegProceso/GetAhoTipos",
  add: "SegProceso/PostSegProceso",
  update: "SegProceso/PutSegProceso",
  delete: "SegProceso/DeleteSegProceso",
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