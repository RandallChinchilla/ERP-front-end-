// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente PasTipoInstrumento
 */

export const columnsPasTipoInstrumento = [
  {
    headerName: "Tipo",
    field: "CodigoTipo",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 800,
    headerAlign: "center",
    align: "center",
  },
];

export const routesPasTipoInstrumentoApi = {
  get: "PasTipoInstrumento/GetPasTipoInstrumentos",
  post: "PasTipoInstrumento/PostPasTipoInstrumento",
  update: "PasTipoInstrumento/PutPasTipoInstrumento",
  delete: "PasTipoInstrumento/DeletePasTipoInstrumento",
  navigation: "./PasTipoInstrumento",
  navigationBack: "./PasTipoInstrumentoView",
};

export const typeMode = {
  onlyread: false,
};
