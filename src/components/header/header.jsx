import React from 'react'
import "./header.css";
const Header = () => {
  return (
    <header className="App-header">
      
        <nav>
          <ul className='ulHeader'>
            <li><a className='ancoraHeader' href="#inicio">Início |</a></li>
            <li><a className='ancoraHeader' href="#projeto">O Projeto |</a></li>
            <li><a className='ancoraHeader' href="#contato">Contato </a></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header