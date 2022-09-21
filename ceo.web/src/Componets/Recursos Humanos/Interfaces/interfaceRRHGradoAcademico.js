//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente RRHGradoAcademico
 */

export const columnsRRHGradoAcademico = [
    {
        title: "Código Grado",
        field: "CodigoGrado",
        initialEditValue: 0,
        editable: "never",
      },
      { title: "Descripción", field: "Descripcion" },
];

export const routesRRHGradoAcademicoApi = {
  get: "RrhGradoAcademico/GetRrhGradosAcademicos",
  add: "RrhGradoAcademico/PostRrhGradoAcademico",
  update: "RrhGradoAcademico/PutRrhGradoAcademico",
  delete: "RrhGradoAcademico/DeleteRrhGradoAcademico",
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