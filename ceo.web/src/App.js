import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Componets/Home/DashBoard";
import Autenticacion from "./Componets/Autenticacion/Autenticacion";
import CrudState from "./Context/Crud/CrudState";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Autenticacion} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
export default App;
