export const columnsRRHMaestro = [
  {
    headerName: "Número Empleado",
    field: "NumeroEmpleado",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Nombre",
    field: "Nombre",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Primer Apellido",
    field: "Apellido1",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Segundo Apellido",
    field: "Apellido2",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
];

export const columnsRRHTabempleados = [
  {
    title: "Nombre",
    field: "Nombre",
    editable: "never",
  },
  {
    title: "Número Empleado",
    field: "NumeroEmpleado",
    editable: "never",
  },
  {
    title: "Salario",
    field: "SalarioMensual",
  },
  {
    title: "Observaciones",
    field: "Observaciones",
  },
];

export const routesRRHMaestroApi = {
  get: "RrhMaestro/GetRrhMaestros",
  post: "RrhMaestro/PostRrhMaestro",
  update: "RrhMaestro/PutRrhMaestro",
  delete: "RrhMaestro/DeleteRrhMaestro",
  navigation: "./RrhMaestro",
  navigationBack: "./RrhMaestroView",
};

export const typeMode = {
  onlyread: false,
};