import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SearchBar from "../../commons/SearchBar/SearchBar"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"
import { loginUser } from "../../../utils/auth.js"
import Modal from "../../commons/Modal/Modal";
import LoginForm from "../../forms/login/LoginForm";
import "./Header.css"

function Header({ onPerfilClick }) {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = (query) => {
    console.log("Buscando:", query);
  }

  const user = JSON.parse(localStorage.getItem("user"))
  const Profile = user?.foto || "/img/profile.jpg"

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

        {/* Barra de búsqueda */}
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Opciones */}
        <nav className="navbar">
          <ul>
            <li>
                <Link to="/">
                  <img src="/img/home.png" alt="Acceso" />
                </Link>
            </li>
            <li><Link to="/tienda">Tienda</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>

            {/* Solo mostrar Login si no hay usuario */}
            {!user && (
              <li>
                <button
                  className="login-btn"
                  onClick={() => setIsLoginOpen(true)}
                >
                  <img src="/img/acceso.svg" alt="Acceso" />
                </button>
              </li>
            )}
            
            {/* Mostrar perfil solo si hay usuario logueado */}
            {user && (
              <li onClick={onPerfilClick} style={{ cursor: "pointer" }}>
                <img 
                  src={user?.foto || Profile} 
                  alt="Avatar"
                  className="avatar"
                />
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Modal con el LoginForm */}
      <Modal
        isOpen={isLoginOpen}
        title="INICIAR SESIÓN"
        onClose={() => setIsLoginOpen(false)}
      >
        <LoginForm onSuccess={() => setIsLoginOpen(false)} />
      </Modal>
      
    </header>
  )
}

export default Header