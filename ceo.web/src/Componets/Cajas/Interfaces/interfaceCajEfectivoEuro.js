export const columnsCajEfectivoEuro = [
  {
    headerName: "Código Moneda",
    field: "CodigoMoneda",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Usuario",
    field: "Id",
    width: 550,
    headerAlign: "center",
    align: "center",
  },
  ];
  
  export const routesCajEfectivoEuroApi = {
    get: "CajEfectivoEur/GetCajEfectivoEurs",
    post: "CajEfectivoEur/PostCajEfectivoEur",
    update: "CajEfectivoEur/PutCajEfectivoEur",
    delete: "CajEfectivoEur/DeleteCajEfectivoEur",
    navigation: "./CajEfectivoEuro",
    navigationBack: "./CajEfectivoEuroView",
  };
  
  export const typeMode = {
    onlyread: false,
  };