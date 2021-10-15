import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./Componets/Home/DashBoard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoard} />
      </Switch>
    </Router>
  );
}
export default App;
