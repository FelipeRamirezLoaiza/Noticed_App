import React, { useState, useContext} from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header({ onPerfilClick }) {

  const user = JSON.parse(localStorage.getItem("user"))

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
            {/* Solo mostrar Login si no hay usuario */}
            {!user && (
              <li>
                <Link to="/inicio">
                  <img src="/img/acceso.svg" alt="Acceso" />
                </Link>
              </li>
            )}

            <li><Link to="/tienda">Tienda</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            
            {/* Mostrar perfil solo si hay usuario logueado */}
            {user && (
              <li onClick={onPerfilClick} style={{ cursor: "pointer" }}>
                <a>
                  Perfil
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header