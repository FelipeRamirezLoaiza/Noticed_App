import React from "react";
import "/src/assets/css/StyleFooter.css";

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-txt">
        <br />
        <div className="somos">
          <h2>Quiénes somos</h2>
          <br />
          <a href="#">Cultura</a>
          <br />
          <br />
          <a href="#">Nuestro equipo</a>
          <br />
          <br />
        </div>

        <div className="ayuda">
          <h2>Ayuda</h2>
          <br />
          <a href="#">Envíos</a>
          <br />
          <br />
          <a href="#">Devoluciones y garantías</a>
          <br />
          <br />
          <a href="#">Preguntas frecuentes</a>
        </div>

        <div className="siguenos">
          <h2>Síguenos</h2>
          <br />
          <a href="#"><img src="/src/assets/img/social2.svg" alt="Social 2" /></a>
          <a href="#"><img src="/src/assets/img/social1.svg" alt="Social 1" /></a>
          <a href="#"><img src="/src/assets/img/social4.svg" alt="Social 4" /></a>
        </div>

        <div className="termino">
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Superintendencia</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
