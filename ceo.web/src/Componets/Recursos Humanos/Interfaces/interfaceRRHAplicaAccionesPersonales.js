export const columnsRRHAplicaAccionesPersonales = [
  { title: "Nombre Empleado", editable: "never" },
  { title: "Número de Empleado", field: "NumeroEmpleado", editable: "never" },
  { title: "Horas Extras", field: "CantidadHorasExtras" },
  { title: "Horas Dobles", field: "CantidadHorasDobles" },
  { title: "Observaciones", field: "Detalle" },
];

export const routesRRHAplicaAccionesPersonales = {
  get: "RrhAplicaAccionPersonal/GetRrhAplicaAccionesPersonales",
  post: "RrhAplicaAccionPersonal/PostRrhAplicaAccionesPersonales",
  update: "RrhAplicaAccionPersonal/PutRrhAplicaAccionesPersonales",
  delete: "RrhAplicaAccionPersonal/DeleteRrhAplicaAccionesPersonales",
};
