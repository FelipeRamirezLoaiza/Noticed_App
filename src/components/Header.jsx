import React from "react"
import "/src/assets/css/StyleHeader.css"

function Header() {
  return (
    <header>
      <div className="menu-container">
        <a href="/views/Index.html" className="logo">
          <img src="/src/assets/img/logo.png" alt="Logo" />
        </a>

        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img className="menu-icono" src="/src/assets/img/menu.png" alt="Menú" />
        </label>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/views/Index.html">
                <img src="/src/assets/img/home.png" alt="Inicio" />
              </a>
            </li>
            <li>
              <a href="/views/Inicio.html">
                <img src="/src/assets/img/acceso.svg" alt="Acceso" />
              </a>
            </li>
            <li><a href="/views/Tienda.html">Tienda</a></li>
            <li><a href="/views/Nosotros.html">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header
