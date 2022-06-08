import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./Componets/Home/DashBoard";
import { CliMaestro } from "./Componets/Clientes/CliMaestro";
import Dashboard from "./Componets/Home/DashBoard";
import Autenticacion from "./Componets/Autenticacion/Autenticacion";
import { DataProvider } from "./Context/AutContext";
import { Provider } from "react-redux";
import store from "./Store/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Autenticacion} />
          <Route path="/dashboard" component={Dashboard} />
        </Provider>
      </Switch>
    </Router>
  );
}
export default App;
