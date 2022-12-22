export const columnsRRHGradoAcademico = [
  {
    headerName: "Código Grado",
    field: "CodigoGrado",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
];

export const routesRRHGradoAcademicoApi = {
  get: "RrhGradoAcademico/GetRrhGradosAcademicos",
  post: "RrhGradoAcademico/PostRrhGradoAcademico",
  update: "RrhGradoAcademico/PutRrhGradoAcademico",
  delete: "RrhGradoAcademico/DeleteRrhGradoAcademico",
  navigation: "./RRHGradoAcademico",
  navigationBack: "./RRHGradoAcademicoView",
};

export const typeMode = {
  onlyread: false,
};