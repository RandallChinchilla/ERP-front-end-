//const userData = JSON.parse(localStorage.getItem("userLogged"));

/**
 * Contexto con el cual interactua el componente AhoTipo
 */

export const columnsAhoTipo = [
  {
    headerName: "Código Tipo Ahorro",
    field: "CodigoTipo",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
];

export const routesAhoTipoApi = {
  get: "AhoTipo/GetAhoTipos",
  add: "AhoTipo/PostAhoTipo",
  update: "AhoTipo/PutAhoTipo",
  delete: "AhoTipo/DeleteAhoTipo",
};
