export const columnsRRHMotivoSalida = [
  {
    headerName: "Código Motivo Salida",
    field: "CodigoMotivoSalida",
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

export const routesRRHMotivoSalidaApi = {
  get: "RrhMotivoSalida/GetRrhMotivosSalida",
  post: "RrhMotivoSalida/PostRrhMotivoSalida",
  update: "RrhMotivoSalida/PutRrhMotivoSalida",
  delete: "RrhMotivoSalida/DeleteRrhMotivoSalida",
  navigation: "./RrhMotivoSalida",
  navigationBack: "./RrhMotivoSalidaView",
};

export const typeMode = {
  onlyread: false,
};