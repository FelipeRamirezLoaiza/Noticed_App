import React from "react"
import { Link } from "react-router-dom"
import ImagePair from "../components/commons/ImagePair/ImagePair.jsx"
import BackgroundSection from "../components/commons/BackgroundSection/BackgroundSection.jsx"
import Button from "../components/commons/Button/Button.jsx"
import "../assets/css/StyleHome.css"

function Home() {
  return (
    <main>
      <div className="body-content container">
        <h2>SE ALGUIEN EN LA MULTITUD</h2>
        <div className="images-row">
          <ImagePair 
            image1="/img/slider1.png" 
            image2="/img/slider2.png" 
            alt1="Busos"
            alt2="Busos Hover"
            linkText="Busos"
            linkTo="/busos"
          />
          <ImagePair 
            image1="/img/slider1.png" 
            image2="/img/slider2.png" 
            alt1="Camisetas"
            alt2="Camisetas Hover"
            linkText="Camisetas"
            linkTo="/camisetas"
          />
          <ImagePair 
            image1="/img/slider1.png" 
            image2="/img/slider2.png" 
            alt1="Cargos"
            alt2="Cargos Hover"
            linkText="Cargos"
            linkTo="/cargos"
          />
        </div>
      </div>
      <BackgroundSection />
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
