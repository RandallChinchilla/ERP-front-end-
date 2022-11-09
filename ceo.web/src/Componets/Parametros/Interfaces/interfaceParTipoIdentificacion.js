export const columnsParTipoIdentificacion = [
    {
      title: "Tipo de Identificación",
      field: "CodigoTipoIdentificacion",
    },
    {
      title: "Descripción",
      field: "Descripcion",
    },

  ];
  
  export const routesParTipoIdentificacionApi = {
    get: "ParTipoidentificacion/GetParTiposIdentificacion",
    post: "ParTipoidentificacion/PostParTipoidentificacion",
    update: "ParTipoidentificacion/PutParTipoidentificacion",
    delete: "ParTipoidentificacion/DeleteParTipoidentificacion",
    navigation: "./ParTipoidentificacion",
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