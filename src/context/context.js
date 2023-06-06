import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contexto = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const recovereUser = localStorage.getItem("usuario");
    if (recovereUser) {
      setUser(JSON.parse(recovereUser));
    }
    setLoad(false);
    console.log(JSON.stringify(recovereUser));
  }, []);

  const login = (cpf, senha) => {
   alert(cpf + " "+ senha +" ");
   navigate("/");
   localStorage.setItem("usuario", JSON.stringify({cpf, senha}));
    setUser({cpf, senha})
  };
  const logout = () => {
    navigate("/login");
    setUser(null);
    localStorage.removeItem("usuario");
    
  };

  return (
    <Contexto.Provider
      value={{
        autenticado: !!user,
        login,
        logout
      }}
    >
      {children}
    </Contexto.Provider>
  );
};