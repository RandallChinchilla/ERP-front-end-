import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Componets/Home/DashBoard";
import Autenticacion from "./Componets/Autenticacion/Autenticacion";
import CrudState from "./Context/Crud/CrudState";
import { Provider } from "react-redux";
import store from "./Store/Index";
import { Notification } from "./Componets/CrossComponets/Notification";

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Autenticacion} />
          <Notification />
          <Route path="/dashboard" component={Dashboard} />
        </Provider>
      </Switch>
    </Router>
  );
}
export default App;
