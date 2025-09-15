import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../commons/SearchBar/SearchBar";
import Modal from "../../commons/Modal/Modal";
import LoginForm from "../../forms/login/LoginForm";
import RegisterForm from "../../forms/register/RegisterForm";
import "./Header.css";

function Header({ onPerfilClick }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleSearch = (query) => {
    console.log("Buscando:", query);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const Profile = user?.foto || "/img/profile.jpg";

  // funciones para alternar modales
  const openRegisterFromLogin = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const openLoginFromRegister = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

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

      {/* Modal Login */}
      <Modal
        isOpen={isLoginOpen}
        title="INICIAR SESIÓN"
        onClose={() => setIsLoginOpen(false)}
      >
        <LoginForm
          onSuccess={() => setIsLoginOpen(false)}
          onRegisterClick={openRegisterFromLogin} // <- pasa la función aquí
        />
      </Modal>

      {/* Modal Register */}
      <Modal
        isOpen={isRegisterOpen}
        title="REGISTRARSE"
        onClose={() => setIsRegisterOpen(false)}
      >
        <RegisterForm
          onSuccess={() => setIsRegisterOpen(false)}
          onLoginClick={openLoginFromRegister} // <- y aquí
        />
      </Modal>
    </header>
  );
}

export default Header