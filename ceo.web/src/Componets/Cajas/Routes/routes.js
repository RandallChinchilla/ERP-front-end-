import { CajCajas } from "../Components/CajCajas";
import CajEfectivoEuroView from "../Components/CajEfecivoEuroView";
import { CajEfectivoEuro } from "../Components/CajEfectivoEuro";
import { CajEfectivoMil } from "../Components/CajEfectivoMil";
import CajEfectivoMilView from "../Components/CajEfectivoMilView";
import { CajEfectivoUSD } from "../Components/CajEfectivoUSD";
import CajEfectivoUSDView from "../Components/CajEfectivoUSDView";
import { CajTipoDocumento } from "../Components/CajTipoDocumento";
import CajTipoDocumentoView from "../Components/CajTipoDocumentoView";
import { PasAportante } from "../../Cartera Pasiva/Components/PasAportante";
import { AhoMaestro } from "../../Ahorros/Componentes/AhoMaestro";
import { PasMaestro } from "../../Cartera Pasiva/Components/PasMaestro";
import { AhoTransaccion } from "../../Ahorros/Componentes/AhoTransaccion";
import { PasTransaccion } from "../../Cartera Pasiva/Components/PasTransaccion";

export const routes = [
  {
    path: "/Dashboard/CajIndex/CajCajas",
    component: CajCajas,
  },
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
  {
    path: "/Dashboard/CajIndex/PasAportante",
    component: PasAportante,
  },
  {
    path: "/Dashboard/CajIndex/AhoMaestro",
    component: AhoMaestro,
  },
  {
    path: "/Dashboard/CajIndex/PasMaestro",
    component: PasMaestro,
  },
  {
    path: "/Dashboard/CajIndex/AhoTransaccion",
    component: AhoTransaccion,
  },
  {
    path: "/Dashboard/CajIndex/PasTransaccion",
    component: PasTransaccion,
  },
];
