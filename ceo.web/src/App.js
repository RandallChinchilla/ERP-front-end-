import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./Componets/Home/DashBoard";
import { CliMaestro } from "./Componets/Clientes/CliMaestro";
import Dashboard from "./Componets/Home/DashBoard";
import Autenticacion from "./Componets/Autenticacion/Autenticacion";
import { DataProvider } from "./Context/AutContext";

function App() {
  return (
    <Router>
      <Switch>
        <DataProvider>
          <Route exact path="/" component={Autenticacion} />
          <Route path="/dashboard" component={Dashboard} />
        </DataProvider>
      </Switch>
    </Router>
  );
}
export default App;
