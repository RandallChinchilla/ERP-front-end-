import { Deleterow } from "../../CrossComponets/Deleterow";
import { Editrow } from "../../CrossComponets/Editrow";

export const columnsPasAportante = [
  {
    headerName: "Aportante",
    field: "CodigoAportante",
  },
  {
    headerName: "Nombre Aportante",
    field: "Nombre",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Teléfono",
    field: "TelefonoCelular",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Dirección",
    field: "DireccionDomicilio",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    headerName: "Correo",
    field: "EMailAportante",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
];

export const routesPasAportanteApi = {
  get: "PasAportante/GetPasAportantes",
  post: "PasAportante/PostPasAportante",
  update: "PasAportante/PutPasAportante",
  delete: "PasAportante/DeletePasAportante",
  navigation: "./PasAportante",
  navigationBack: "./PasAportanteView",
};

// export const tableStyle = {
//   rowStyle: {
//     fontSize: 12,
//   },
//   headerStyle: {
//     backgroundColor: "#898883",
//     color: "#FFF",
//     fontSize: 13,
//   },
// };
