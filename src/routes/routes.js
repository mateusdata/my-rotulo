import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, Contexto } from "../context/context";
import LoginPage from "../pages/login/loginPage";
import Home from "../pages/home/home";
import Admin from "../pages/admin/admin";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import { Spin } from "antd";
import SubstanceEditing from "../pages/editing/SubstanceEditing";

const Rotas = () => {
  function Private({ children }) {
    const { autenticado, load } = useContext(Contexto);

    if (load) {
      return (
        <div style={{ display: "flex", color: "blue", justifyContent: "center", alignItems: "center", height: "100vh" }} className="loading">
          <Spin color="#36d7b7" size={100} />
        </div>
      );
    }
    if (!autenticado) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contato" element={<Contact />} />
          <Route exact path="/sobre" element={<About />} />
          <Route exact path="/adm" element={<Private><Admin /></Private>} />
          <Route exact path="/edit" element={<Private><SubstanceEditing/></Private>} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Rotas;
