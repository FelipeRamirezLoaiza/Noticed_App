import React from "react";
import "/src/assets/css/StyleIndex.css";

function Home() {
  return (
    <main>
      <h2>¡ Se alguien en la multitud !</h2><br />

      <div className="body-content container">
        <div className="image-container">
          <div className="image1">
            <img src="/assets/img/slider1.png" alt="" />
            <div className="image2">
              <img src="/assets/img/slider2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="image-container">
          <div className="image3">
            <img src="/assets/img/slider1.png" alt="" />
            <div className="image4">
              <img src="/assets/img/slider2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="image-container">
          <div className="image5">
            <img src="/assets/img/slider1.png" alt="" />
            <div className="image6">
              <img src="/assets/img/slider2.png" alt="" />
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
            <img src="/assets/img/fondo.png" alt="" />
          </div>
        </section>
      </div>

      <section className="nosotros">
        <div className="nosotros-txt">
          <br /><br /><br />
          <h2>Somos</h2>
          <p>La mejor <br /> <span>Tienda de ropa</span></p>
        </div>
        <div className="info">
          <a href="/views/Nosotros.html" className="enlace">Ver más</a>
        </div>
      </section>
    </main>
  );
}

export default Home;

