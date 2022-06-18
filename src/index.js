import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import { BaseForm } from "./components/molecules/formualario/BaseForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/formulario/:nomeFormulario" element={<BaseForm />} />
    </Routes>
  </BrowserRouter>
);
