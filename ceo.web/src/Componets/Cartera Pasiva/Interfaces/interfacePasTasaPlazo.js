import { Editrow } from "../../CrossComponets/Editrow";
import { Deleterow } from "../../CrossComponets/Deleterow";

export const columnsPasTasaPlazo = [
  //{
  //   headerName: "Acciones",
  //   field: "actions",
  //   type: "actions",
  //   width: 80,
  //   renderCell: (params) => [
  //     <Editrow rowUpdate={params.row} navigation="./PasTasaPlazo" />,
  //     // <Deleterow row={params.row} />,
  //   ],
  // },
  {
    headerName: "Código Tipo",
    field: "CodigoTipo",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Fecha",
    field: "FechaHora",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Tasa Bruta",
    field: "Tasa",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Estado",
    field: "CodigoEstado",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
];

export const routesPasTasaPlazoApi = {
  get: "PasTasaPlazo/GetPasTasaPlazos",
  post: "PasTasaPlazo/PostPasTasaPlazo",
  update: "PasTasaPlazo/PutPasTasaPlazo",
  delete: "PasTasaPlazo/DeletePasTasaPlazo",
  navigation: "./PasTasaPlazo",
  navigationBack: "./PasTasaPlazoView",
};

export const typeMode = {
  onlyread: true,
};
