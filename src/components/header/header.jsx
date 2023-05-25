import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">

      <nav>
        <ul className='ulHeader'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/adm">Contato</Link></li>
          <li><Link to="/adm">O projeto</Link></li>
        
          
        </ul>
      </nav>
    </header>
  )
}

export default Header