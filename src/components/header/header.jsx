import React, { useContext } from 'react'
import "./header.css";
import { Link } from 'react-router-dom';
import { Contexto } from '../../context/context';

const Header = () => {
  const {autenticado, logout}  =  useContext(Contexto);
  
  return (
    <header className="App-header">

      <nav>
        <ul className='ulHeader'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/adm">Contato</Link></li>
          <li><Link to="/adm">ADM</Link></li>
         { !autenticado&&<li><Link to="/login">Login</Link></li>}
          {autenticado && <button onClick={()=>{
           logout();
          }}>Sair</button>}
        </ul>
      </nav>
    </header>
  )
}

export default Header