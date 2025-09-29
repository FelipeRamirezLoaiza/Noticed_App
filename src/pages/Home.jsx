// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/commons/ImageCarousel/ImageCarousel.jsx";
import BackgroundSection from "../components/commons/BackgroundSection/BackgroundSection.jsx";
import Button from "../components/commons/Button/Button.jsx";
import Card from "../components/commons/Card/Card.jsx";
import "../assets/css/StyleHome.css";

function Home() {
  // Tus arrays tal cual
  const camisetas = [
    {
      image1: `${import.meta.env.BASE_URL}img/slider3.png`,
      image2: `${import.meta.env.BASE_URL}img/slider4.png`,
      alt1: "Camiseta",
      alt2: "Camiseta Hover",
      linkText: "Camisetas",
      linkTo: "/camisetas",
    },
    {
      image1: `${import.meta.env.BASE_URL}img/slider3.png`,
      image2: `${import.meta.env.BASE_URL}img/slider4.png`,
      alt1: "Camiseta",
      alt2: "Camiseta Hover",
      linkText: "Camisetas",
      linkTo: "/camisetas",
    },
    {
      image1: `${import.meta.env.BASE_URL}img/slider3.png`,
      image2: `${import.meta.env.BASE_URL}img/slider4.png`,
      alt1: "Camiseta",
      alt2: "Camiseta Hover",
      linkText: "Camisetas",
      linkTo: "/camisetas",
    }
  ];

  const busos = [
    {
      image1: `${import.meta.env.BASE_URL}img/slider1.png`,
      image2: `${import.meta.env.BASE_URL}img/slider2.png`,
      alt1: "Buso",
      alt2: "Buso Hover",
      linkText: "Busos",
      linkTo: "/busos",
    },
    {
      image1: `${import.meta.env.BASE_URL}img/slider1.png`,
      image2: `${import.meta.env.BASE_URL}img/slider2.png`,
      alt1: "Buso",
      alt2: "Buso Hover",
      linkText: "Busos",
      linkTo: "/busos",
    },
    {
      image1: `${import.meta.env.BASE_URL}img/slider1.png`,
      image2: `${import.meta.env.BASE_URL}img/slider2.png`,
      alt1: "Buso",
      alt2: "Buso Hover",
      linkText: "Busos",
      linkTo: "/busos",
    }
  ];

  const cargos = [
    {
      image1: `${import.meta.env.BASE_URL}img/slider5.png`,
      image2: `${import.meta.env.BASE_URL}img/slider6.png`,
      alt1: "Cargo",
      alt2: "Cargo Hover",
      linkText: "Cargos",
      linkTo: "/cargos",
    },
    {
      image1: `${import.meta.env.BASE_URL}img/slider5.png`,
      image2: `${import.meta.env.BASE_URL}img/slider6.png`,
      alt1: "Cargo",
      alt2: "Cargo Hover",
      linkText: "Cargos",
      linkTo: "/cargos",
    },
    {
      image1: `${import.meta.env.BASE_URL}img/slider5.png`,
      image2: `${import.meta.env.BASE_URL}img/slider6.png`,
      alt1: "Cargo",
      alt2: "Cargo Hover",
      linkText: "Cargos",
      linkTo: "/cargos",
    }
  ];

  // Estado para detectar desktop (≥ 993px)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.matchMedia("(min-width: 993px)").matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 993px)");
    const handler = (e) => setIsDesktop(e.matches);

    // compatibilidad con addEventListener / addListener
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // Estilo inline: grid en desktop (3 en fila), flex en pantallas pequeñas
  const imagesRowStyle = isDesktop
    ? {
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)", // cada columna toma el ancho del contenido (respeta max-width interno)
        gap: "5rem",
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
      }
    : {
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      };

  return (
    <main>
      <BackgroundSection />

      <div className="body-content container">
        <h2>SE ALGUIEN EN LA MULTITUD</h2>

        {/* Aplicamos style dinámico aquí (estructura modificada, CSS sin cambios) */}
        <div className="images-row" style={imagesRowStyle}>
          <div className="images-col" style={{ display: "flex", justifyContent: "center" }}>
            <ImageCarousel items={camisetas} />
          </div>

          <div className="images-col" style={{ display: "flex", justifyContent: "center" }}>
            <ImageCarousel items={busos} />
          </div>

          <div className="images-col" style={{ display: "flex", justifyContent: "center" }}>
            <ImageCarousel items={cargos} />
          </div>
        </div>
      </div>

      <div>
        <Card
          image1={`${import.meta.env.BASE_URL}img/slider1.png`}
          alt1="Shadow Lord Tee"
          badgeText="NUEVO LANZAMIENTO"
          title="BUSO VINTAGE"
          description={`Descubre nuestra nueva colección exclusiva 2025.
            \nDiseño minimalista con acabados premium que define el estilo urbano moderno.`}
          features={["Alto Gramaje", "Diseño Imponente", "Edición Limitada"]}
          price="$160.000"
          oldPrice="$180.000"
        />
      </div>
      <br />
      <br />
      <div>
        <Card
          image1={`${import.meta.env.BASE_URL}img/slider1.png`}
          alt1="Shadow Lord Tee"
          badgeText="NUEVO LANZAMIENTO"
          title="BUSO VINTAGE"
          description={`Descubre nuestra nueva colección exclusiva 2025.
            \nDiseño minimalista con acabados premium que define el estilo urbano moderno.`}
          features={["Alto Gramaje", "Diseño Imponente", "Edición Limitada"]}
          price="$160.000"
          oldPrice="$180.000"
        />
      </div>

      <section className="nosotros">
        <div className="nosotros-txt">
          <h2>Somos</h2>
          <p>La mejor tienda de ropa </p>
        </div>
        <Link to="/nosotros">
          <Button type="submit" className="form-button" text="Ver más" />
        </Link>
      </section>
    </main>
  );
}

export default Home;
