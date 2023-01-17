import CajEfectivoEuroView from "../Components/CajEfecivoEuroView";
import { CajEfectivoEuro } from "../Components/CajEfectivoEuro";
import { CajEfectivoMil } from "../Components/CajEfectivoMil";
import CajEfectivoMilView from "../Components/CajEfectivoMilView";
import { CajEfectivoUSD } from "../Components/CajEfectivoUSD";
import CajEfectivoUSDView from "../Components/CajEfectivoUSDView";
import { CajTipoDocumento } from "../Components/CajTipoDocumento";
import CajTipoDocumentoView from "../Components/CajTipoDocumentoView";

export const routes = [
  {
    path: "/Dashboard/CajIndex/CajTipoDocumento",
    component: CajTipoDocumento,
  },
  {
    path: "/Dashboard/CajIndex/CajTipoDocumentoView",
    component: CajTipoDocumentoView,
  },
  {
    path: "/Dashboard/CajIndex/CajEfectivoMil",
    component: CajEfectivoMil,
  },
  {
    path: "/Dashboard/CajIndex/CajEfectivoMilView",
    component: CajEfectivoMilView,
  },
  {
    path: "/Dashboard/CajIndex/CajEfectivoUSD",
    component: CajEfectivoUSD,
  },
  {
    path: "/Dashboard/CajIndex/CajEfectivoUSDView",
    component: CajEfectivoUSDView,
  },
  {
    path: "/Dashboard/CajIndex/CajEfectivoEuro",
    component: CajEfectivoEuro,
  },
  {
    path: "/Dashboard/CajIndex/CajEfectivoEuroView",
    component: CajEfectivoEuroView,
  },
];