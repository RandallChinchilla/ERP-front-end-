import { Deleterow } from "../../CrossComponets/Deleterow";
import { Editrow } from "../../CrossComponets/Editrow";

export const columnsPasInstrumento = [
  // {
  //   headerName: "Acciones",
  //   field: "actions",
  //   type: "actions",
  //   width: 80,
  //   renderCell: (params) => [
  //     <Editrow rowUpdate={params.row} navigation="./PasInstrumento" />,
  //     <Deleterow
  //       rowDelete={params.row}
  //       deleteApi="PasInstrumento/DeletePasInstrumento"
  //       field="CodigoInstrumento"
  //       params={params}
  //     />,
  //   ],
  // },
  {
    headerName: "Código Instrumento",
    field: "CodigoInstrumento",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Descripción",
    field: "Descripcion",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Moneda",
    field: "CodigoMoneda",
    width: 250,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo.Descripcion,
  },
  {
    headerName: "Periodicidad Pago Interés",
    field: "CodigoPeriodicidadPagoInteres",
    width: 250,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.CodigoNavigation.Descripcion,
  },
  {
    headerName: "Periodicidad Revisión Tasa",
    field: "CodigoPeriodicidadRevisionTasa",
    width: 250,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => params.row.Codigo1.Descripcion,
  },
];

export const routesPasInstrumentoApi = {
  get: "PasInstrumento/GetPasInstrumentos",
  post: "PasInstrumento/PostPasInstrumento",
  update: "PasInstrumento/PutPasInstrumento",
  delete: "PasInstrumento/DeletePasInstrumento",
  navigation: "./PasInstrumento",
  navigationBack: "./PasInstrumentoView",
};
