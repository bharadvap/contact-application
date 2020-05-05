import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DBConfig } from "./db/DbConfig";
import { initDB } from "react-indexed-db";
import routes from "./router/routes";
import ApplicationRouter from "./router/ApplicationRouter";
initDB(DBConfig);

function App() {
  return (
    <div className="App">
      <ApplicationRouter routes={routes} />
    </div>
  );
}

export default App;
