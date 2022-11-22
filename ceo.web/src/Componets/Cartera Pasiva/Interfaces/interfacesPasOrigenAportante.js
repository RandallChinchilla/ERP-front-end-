// const userData = JSON.parse(localStorage.getItem("userLogged"));
// console.log(userData);

/**
 * Contexto con el cual interactua el componente PasOrigenAportante
 */

export const columnsPasOrigenAportante = [
  {
    headerName: "Código Origen Aportante",
    field: "CodigoOrigenAportante",
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

export const routesPasOrigenAportanteApi = {
  get: "PasOrigenAportante/GetPasOrigenAportantes",
  post: "PasOrigenAportante/PostPasOrigenAportante",
  update: "PasOrigenAportante/PutPasOrigenAportante",
  delete: "PasOrigenAportante/DeletePasOrigenAportante",
  navigation: "./PasOrigenAportante",
  navigationBack: "./PasOrigenAportanteView",
};

export const typeMode = {
  onlyread: false,
};
