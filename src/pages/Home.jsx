import React from "react"
import { Link } from "react-router-dom"
import ImagePair from "../components/ImagePair"
import BackgroundSection from "../components/BackgroundSection"
import Button from "../components/Button.jsx"
import "../assets/css/StyleIndex.css"

function Home() {
  return (
    <main>
      <h2>¡ Se alguien en la multitud !</h2><br />
      <div className="body-content container">
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
      <BackgroundSection />
      <section className="nosotros">
        <div className="nosotros-txt">
          <h2>Somos</h2>
          <p>La mejor <br /> <span>Tienda de ropa</span></p>
        </div>
        <Link to="/nosotros"> <Button type="submit" className="form-button "text="Ver más" /></Link>
      </section>
    </main>
  )
}

export default Home
