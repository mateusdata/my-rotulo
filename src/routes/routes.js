import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Project from "../pages/project/project";

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/adm" element={<Project />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Rotas;