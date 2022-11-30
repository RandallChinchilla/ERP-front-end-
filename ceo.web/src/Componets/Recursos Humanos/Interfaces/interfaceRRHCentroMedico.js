export const columnsRRHCentroMedico = [
  {
    headerName: "Código Centro Médico",
    field: "CodigoCentroMedico",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
];

export const routesRRHCentroMedicoApi = {
  get: "RrhCentroMedico/GetRrhCentrosMedicos",
  post: "RrhCentroMedico/PostRrhCentroMedico",
  update: "RrhCentroMedico/PutRrhCentroMedico",
  delete: "RrhCentroMedico/DeleteRrhCentroMedico",
  navigation: "./RrhCentroMedico",
  navigationBack: "./RrhCentroMedicoView",
};

export const typeMode = {
  onlyread: false,
};