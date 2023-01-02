export const columnsCajEfectivoUSD = [
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
  
  export const routesCajEfectivoUSDApi = {
    get: "CajEfectivoUsd/GetCajEfectivoUsds",
    post: "CajEfectivoUsd/PostCajEfectivoUsd",
    update: "CajEfectivoUsd/PutCajEfectivoUsd",
    delete: "CajEfectivoUsd/DeleteCajEfectivoUsd",
    navigation: "./CajEfectivoUSD",
    navigationBack: "./CajEfectivoUSDView",
  };
  
  export const typeMode = {
    onlyread: false,
  };