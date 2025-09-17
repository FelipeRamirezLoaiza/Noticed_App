import React from "react"
import { Link } from "react-router-dom"
import ImagePair from "../components/commons/ImagePair/ImagePair.jsx"
import BackgroundSection from "../components/commons/BackgroundSection/BackgroundSection.jsx"
import Button from "../components/commons/Button/Button.jsx"
import Card from "../components/commons/Card/Card.jsx"
import "../assets/css/StyleHome.css"

function Home() {
  return (
    <main>
      <BackgroundSection />
      <div className="body-content container">
        <h2>SE ALGUIEN EN LA MULTITUD</h2>
        <div className="images-row">
          <ImagePair 
            image1={`${import.meta.env.BASE_URL}img/slider1.png`} 
            image2={`${import.meta.env.BASE_URL}img/slider2.png`} 
            alt1="Busos"
            alt2="Busos Hover"
            linkText="Busos"
            linkTo="/busos"
          />
          <ImagePair 
            image1={`${import.meta.env.BASE_URL}img/slider1.png`} 
            image2={`${import.meta.env.BASE_URL}img/slider2.png`} 
            alt1="Camisetas"
            alt2="Camisetas Hover"
            linkText="Camisetas"
            linkTo="/camisetas"
          />
          <ImagePair 
            image1={`${import.meta.env.BASE_URL}img/slider1.png`} 
            image2={`${import.meta.env.BASE_URL}img/slider2.png`} 
            alt1="Cargos"
            alt2="Cargos Hover"
            linkText="Cargos"
            linkTo="/cargos"
          />
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
<br/><br/>
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
        <Link to="/nosotros"> <Button type="submit" className="form-button" text="Ver más" /></Link>
      </section>
    </main>
  )
}

export default Home
