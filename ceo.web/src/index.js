import "./Helpers/globals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
//const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );

// registerServiceWorker();
