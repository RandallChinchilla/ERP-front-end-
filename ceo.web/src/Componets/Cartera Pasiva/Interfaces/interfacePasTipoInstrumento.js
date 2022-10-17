// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente PasTipoInstrumento
 */

 export const columnsPasTipoInstrumento = [
    {
      title: "Código Empresa",
      field: "CodigoEmpresa",
      initialEditValue: 1,
      editable: "never",
    },
    {
      title: "Nombre",
      field: "CodigoEmpresaNavigation.Nombre",
      id: "CodigoEmpresaNavigation.CodigoEmpresa",
      initialEditValue: "DmdInterSoft",
      editable: "never",
    },
    {
      title: "Tipo",
      field: "CodigoTipo",
      initialEditValue: 0,
      editable: "never",
    },
    { title: "Descripción", field: "Descripcion" },
  ];
  
  export const routesPasTipoInstrumentoApi = {
    get: "PasTipoInstrumento/GetPasTipoInstrumentos",
    add: "PasTipoInstrumento/PostPasTipoInstrumento",
    update: "PasTipoInstrumento/PutPasTipoInstrumento",
    delete: "PasTipoInstrumento/DeletePasTipoInstrumento",
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