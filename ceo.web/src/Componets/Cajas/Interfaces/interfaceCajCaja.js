import AhoMaestroView from "../../Ahorros/Componentes/AhoMaestroView";
import AhoTransaccionView from "../../Ahorros/Componentes/AhoTransaccionView";
import { routesAhoMaestroApi } from "../../Ahorros/Interfaces/interfaceAhoMaestro";
import { routesAhoTransaccionApi } from "../../Ahorros/Interfaces/interfaceAhoTransaccion";
import PasAportanteView from "../../Cartera Pasiva/Components/PasAportanteView";
import { PasMaestroView } from "../../Cartera Pasiva/Components/PasMaestroView";
import PasTransaccionView from "../../Cartera Pasiva/Components/PasTransaccionView";
import { routesPasAportanteApi } from "../../Cartera Pasiva/Interfaces/interfacePasAportante";
import { routesPasMaestroApi } from "../../Cartera Pasiva/Interfaces/interfacePasMaestro";
import { routesPasTransaccionApi } from "../../Cartera Pasiva/Interfaces/interfacePasTransaccion";
const userLogged = JSON.parse(localStorage.getItem("myuser"));

export const tabMenuOptions = [
  {
    headerName: "Aportante",
    value: "0",
    component: () => (
      <PasAportanteView
        apiRoutes={(routesPasAportanteApi.navigationBack = "./CajCajas")}
      />
    ),
  },
  {
    headerName: "Crear Ahorro",
    value: "1",
    component: () => (
      <AhoMaestroView
        apiRoutes={
          ((routesAhoMaestroApi.get = `AhoMaestro/GetAhoMaestroUserId?userId=${userLogged.Id}`),
          (routesAhoMaestroApi.navigationBack = "./CajCajas"))
        }
      />
    ),
  },
  {
    headerName: "Crear Aportante",
    value: "2",
    component: () => (
      <PasMaestroView
        apiRoutes={
          ((routesPasMaestroApi.get = `PasMaestro/GetPasMaestroUserId?userId=${userLogged.Id}`),
          (routesPasMaestroApi.navigationBack = "./CajCajas"))
        }
      />
    ),
  },
  {
    headerName: "Transacción Ahorro",
    value: "3",
    component: () => (
      <AhoTransaccionView
        apiRoutes={
          ((routesAhoTransaccionApi.get = `AhoTransaccion/GetAhoTransaccionUserId?userId=${userLogged.Id}`),
          (routesAhoTransaccionApi.navigationBack = "./CajCajas"))
        }
      />
    ),
  },
  {
    headerName: "Transacción Aportante",
    value: "4",
    component: () => (
      <PasTransaccionView
        apiRoutes={
          ((routesPasTransaccionApi.get = `PasTransaccion/GetPasTransaccionsUserId?userId=${userLogged.Id}`),
          (routesPasTransaccionApi.navigationBack = "./CajCajas"))
        }
      />
    ),
  },
  {
    headerName: "Cierr Caja",
    value: "5",
    component: () => (
      <PasTransaccionView
        apiRoutes={
          ((routesAhoTransaccionApi.get = `AhoTransaccion/GetAhoTransaccionUserId?userId=${userLogged.Id}`),
          (routesAhoTransaccionApi.navigationBack = "./CajCajas"))
        }
      />
    ),
  },
];
