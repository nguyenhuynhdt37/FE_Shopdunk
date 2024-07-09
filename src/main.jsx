import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </Router>
  </React.StrictMode>
);
