export const columnsCajEfectivoMil = [
    {
      headerName: "Código Moneda",
      field: "CodigoMoneda",
      width: 550,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => params.row.Codigo.Descripcion,
    },
    {
      headerName: "Usuario",
      field: "Id",
      width: 550,
      headerAlign: "center",
      align: "center",
    },
  ];
  
  export const routesCajEfectivoMilApi = {
    get: "CajEfectivoMl/GetCajEfectivoMls",
    post: "CajEfectivoMl/PostCajEfectivoMl",
    update: "CajEfectivoMl/PutCajEfectivoMl",
    delete: "CajEfectivoMl/DeleteCajEfectivoMl",
    navigation: "./CajEfectivoMil",
    navigationBack: "./CajEfectivoMilView",
  };
  
  export const typeMode = {
    onlyread: false,
  };