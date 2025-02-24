import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css"; // ✅ Import FontAwesome
// import { BrowserRouter } from "react-router-dom"; 

ReactDOM.render(<App />, document.getElementById("root"));
