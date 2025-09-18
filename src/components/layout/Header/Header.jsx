import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../commons/Modal/Modal";
import LoginForm from "../../forms/login/LoginForm";
import RegisterForm from "../../forms/register/RegisterForm";
import "./Header.css";

function Header({ onPerfilClick }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const Profile = user?.foto
  ? `${import.meta.env.BASE_URL}${user.foto}`
  : `${import.meta.env.BASE_URL}img/profile.jpg`;

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
        <div className="logo-left">
          <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo" href="/" />
        </div>

        <nav className="left-navbar">
          <span><Link to="/tienda">HOMBRE</Link></span>
          <span><Link to="/tienda">MUJER</Link></span>
        </nav>

        <div className="logo-center">
          <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo" href="/" />
        </div>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img className="menu-icono" src={`${import.meta.env.BASE_URL}img/menu.png`} alt="Menú" />
        </label>

        {/* Opciones */}
        <nav className="right-navbar">
          <ul>
            <li><Link to="/tienda">TIENDA</Link></li>
            <li><Link to="/nosotros">NOSOTROS</Link></li>
            <li><Link to="/contacto">CONTACTO</Link></li>

            {!user && (
              <li>
                <button
                  className="login-btn"
                  onClick={() => setIsLoginOpen(true)}
                >
                  <img src={`${import.meta.env.BASE_URL}img/acceso.svg`} alt="Acceso" />
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