// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente PasOrigenFondos
 */

export const columnsPasOrigenFondos = [
  {
    headerName: "Código Origen Fondos",
    field: "CodigoOrigenFondos",
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

export const routesPasOrigenFondosApi = {
  get: "PasOrigenFondo/GetPasOrigenFondos",
  post: "PasOrigenFondo/PostPasOrigenFondo",
  update: "PasOrigenFondo/PutPasOrigenFondo",
  delete: "PasOrigenFondo/DeletePasOrigenFondo",
  navigation: "./PasOrigenFondo",
  navigationBack: "./PasOrigenFondosView",
};

export const typeMode = {
  onlyread: false,
};
