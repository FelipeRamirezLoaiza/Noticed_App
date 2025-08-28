import React from "react"
import "../assets/css/StyleFooter.css"

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-txt">
        <div className="somos">
          <h2>Quiénes somos</h2>
          <a href="#">Cultura</a>
          <a href="#">Nuestro equipo</a>
        </div>

        <div className="ayuda">
          <h2>Ayuda</h2>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones y garantías</a>
          <a href="#">Preguntas frecuentes</a>
        </div>

        <div className="siguenos">
          <h2>Síguenos</h2>
          <a href="#"><img src="/img/social2.svg" alt="Social 2" /></a>
          <a href="#"><img src="/img/social1.svg" alt="Social 1" /></a>
          <a href="#"><img src="/img/social4.svg" alt="Social 4" /></a>
        </div>

        <div className="termino">
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Superintendencia</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer