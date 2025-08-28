import React from "react"
import { Link } from "react-router-dom"
import "../assets/css/StyleIndex.css"

function Home() {
  return (
    <main>
      <h2>¡ Se alguien en la multitud !</h2><br />

      <div className="body-content container">
        <div className="image-container">
          <div className="image1">
            <img src="/img/slider1.png" alt="Slider 1" />
            <div className="image2">
              <img src="/img/slider2.png" alt="Slider 2" />
            </div>
          </div>
        </div>

        <div className="image-container">
          <div className="image3">
            <img src="/img/slider1.png" alt="Slider 1" />
            <div className="image4">
              <img src="/img/slider2.png" alt="Slider 2" />
            </div>
          </div>
        </div>

        <div className="image-container">
          <div className="image5">
            <img src="/img/slider1.png" alt="Slider 1" />
            <div className="image6">
              <img src="/img/slider2.png" alt="Slider 2" />
            </div>
          </div>
        </div>
      </div>

      <div className="body-content">
        <a href="#" className="enlace1">Busos</a>
        <a href="#" className="enlace2">Camisetas</a>
        <a href="#" className="enlace3">Cargos</a>
        <br /><br /><br /><br />

        <section className="fondos">
          <div className="fondo">
            <img src="/img/fondo.png" alt="Fondo" />
          </div>
        </section>
      </div>

      <section className="nosotros">
        <div className="nosotros-txt">
          <h2>Somos</h2>
          <p>La mejor <br /> <span>Tienda de ropa</span></p>
        </div>
        <div className="info">
          <Link to="/nosotros" className="enlace">Ver más</Link>
        </div>
      </section>
    </main>
  )
}

export default Home