import { Spin } from "antd";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import 'animate.css';

export const Contexto = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [load, setLoad] = useState(true);
  const [nomeUser, setNomeUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark');

  useEffect(() => {
    if(nomeUser){
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false)
      return 
    }
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode, nomeUser]);


  useEffect(() => {

    const recovereUser = localStorage.getItem("usuario");
    if (recovereUser) {
      setUser(JSON.parse(recovereUser));
    }
    setTimeout(() => {
      setLoad(false);
    }, 1200);
  }, []);

  const login = (cpf, senha) => {
    setLoad(true);
    //alert(cpf + " "+ senha +" ");
    localStorage.setItem("usuario", JSON.stringify({ cpf }));
    setUser({ cpf })
    setTimeout(() => {
      setLoad(false);
    }, 1200);
    navigate("/adm");

  };
  const logout = () => {
    setLoad(true)
    setTimeout(() => {
      navigate("/");
      setUser("");
      localStorage?.removeItem("usuario");
      setLoad(false)
    }, 1200);

  };
  if (load) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="default" />
      </div>
    )
  }

  if (false) { //se tirar esse loading ele redireciona pra /login mesmo se estiver logado
    return <div style={{ display: "flex", color: "blue", justifyContent: "center", alignItems: "center", height: "100vh" }} className="loading">
      <HashLoader color="#36d7b7" size={100} />
    </div>
  }
  return (
    <Contexto.Provider
      value={{
        autenticado: !!user,
        login,
        logout,
        load,
        user,
        nomeUser,
        setNomeUser,
        currentPage,
        setCurrentPage,
        showMenu, setShowMenu,
        darkMode, setDarkMode
      }}
    >
      {children}
    </Contexto.Provider>
  );
};