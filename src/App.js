import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { DBConfig } from "./db/DbConfig";
import { initDB } from "react-indexed-db";
import routes from "./router/routes";
import ApplicationRouter from "./router/ApplicationRouter";
import configureStore from "./redux/store";
initDB(DBConfig);

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <ApplicationRouter routes={routes} />
      </div>
    </Provider>
  );
}

export default App;
