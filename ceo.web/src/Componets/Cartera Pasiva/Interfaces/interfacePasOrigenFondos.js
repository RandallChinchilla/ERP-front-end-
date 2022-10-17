// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente PasOrigenFondos
 */

 export const columnsPasOrigenFondos = [
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
      title: "Código Origen Fondos",
      field: "CodigoOrigenFondos",
      initialEditValue: 0,
      editable: "never",
    },
    { title: "Descripción", field: "Descripcion" },
  ];
  
  export const routesPasOrigenFondosApi = {
    get: "PasOrigenFondo/GetPasOrigenFondos",
    add: "PasOrigenFondo/PostPasOrigenFondo",
    update: "PasOrigenFondo/PutPasOrigenFondo",
    delete: "PasOrigenFondo/DeletePasOrigenFondo",
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