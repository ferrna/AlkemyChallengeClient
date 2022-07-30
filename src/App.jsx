import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Operations from "./components/Operations";
import Login from "./components/Login";
import ErrorMessage from "./components/common/ErrorMessage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="operations" element={<Operations />} />
          <Route path="login" element={<Login />} />
          <Route
            path="*"
            element={<ErrorMessage>Ops! Esta página aún no ha sido creada.</ErrorMessage>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
