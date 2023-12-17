import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

export const Contexto = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [load, setLoad] = useState(true);
  const [nomeUser, setNomeUser] = useState("");
  const navigate = useNavigate();

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
    setLoad(false);
    navigate("/adm");

  };
  const logout = () => {
    navigate("/");
    setUser("");
    localStorage?.removeItem("usuario");

  };

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
        setNomeUser
      }}
    >
      {children}
    </Contexto.Provider>
  );
};