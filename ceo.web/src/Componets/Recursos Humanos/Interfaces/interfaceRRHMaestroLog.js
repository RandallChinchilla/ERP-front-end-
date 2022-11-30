export const columnsRRHMaestroLog = [
  {
    headerName: "Número Empleado",
    field: "NumeroEmpleado",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Número Id",
    field: "NumeroId",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Nombre",
    field: "Nombre",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Primer Apellido",
    field: "Apellido1",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Segundo Apellido",
    field: "Apellido2",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
];

export const routesRRHMaestroLogApi = {
  get: "RrhMaestroLog/GetRrhMaestrosLog",
  post: "RrhMaestroLog/PostRrhMaestroLog",
  update: "RrhMaestroLog/PutRrhMaestroLog",
  delete: "RrhMaestroLog/DeleteRrhMaestroLog",
  navigation: "./RrhMaestroLog",
  navigationBack: "./RrhMaestroLogView",
};

export const typeMode = {
  onlyread: true,
};