export const columnsSegEvento = [
    {
      headerName: "Id Evento",
      field: "IdEvento",
      width: 600,
      headerAlign: "center",
      align: "center",
    },
    {
      headerName: "Descripción",
      field: "Descripcion",
      width: 600,
      headerAlign: "center",
      align: "center",
    },
  ];
  
  export const routesSegEventoApi = {
    get: "SegEvento/GetSegEventos",
    post: "SegEvento/PostSegEvento",
    update: "SegEvento/PutSegEvento",
    delete: "SegEvento/DeleteSegEvento",
    navigation: "./SegEvento",
    navigationBack: "./SegEventoView",
  };
  
  export const typeMode = {
    onlyread: false,
    deleteButton: false,
    editeButton: false,
    addButton: false,
  };