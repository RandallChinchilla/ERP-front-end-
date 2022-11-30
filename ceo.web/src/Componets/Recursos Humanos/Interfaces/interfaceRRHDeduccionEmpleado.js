export const columnsRRHDeduccionEmpleado = [
  {
    headerName: "# Deducción",
    field: "NumeroDeduccion",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Nombre",
    field: "NumeroEmpleado",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tipo Deducción",
    field: "CodigoTipoDeduccion",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Monto",
    field: "Monto",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Detalle",
    field: "Detalle",
    width: 225,
    headerAlign: "center",
    align: "center",
  },
];

export const routesRRHDeduccionEmpleadoApi = {
  get: "RrhDeduccionEmpleado/GetRrhDeduccionEmpleados",
  post: "RrhDeduccionEmpleado/PostRrhDeduccionEmpleado",
  update: "RrhDeduccionEmpleado/PutRrhDeduccionEmpleado",
  delete: "RrhDeduccionEmpleado/DeleteRrhDeduccionEmpleado",
  navigation: "./RrhDeduccionEmpleado",
  navigationBack: "./RrhDeduccionEmpleadoView",
};

export const typeMode = {
  onlyread: false,
};