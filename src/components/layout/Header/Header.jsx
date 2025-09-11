import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header({ onPerfilClick }) {
  return (
    <header>
      <div className="menu-container">
        <a href="/" className="logo">
          <img src="/img/logo.png" alt="Logo" />
        </a>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img className="menu-icono" src="/img/menu.png" alt="Menú" />
        </label>

        <nav className="navbar">
          <ul>
            <li>
                <Link to="/">
                  <img src="/img/home.png" alt="Acceso" />
                </Link>
            </li>
            <li>
              <a href="/inicio">
                <img src="/img/acceso.svg" alt="Acceso" />
              </a>
            </li>
            <li><Link to="/tienda">Tienda</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li onClick={onPerfilClick} style={{ cursor: "pointer" }}>
              Perfil
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header