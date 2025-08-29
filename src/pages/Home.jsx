import React from "react"
import ImagePair from "../components/ImagePair"
import BackgroundSection from "../components/BackgroundSection"
import NosotrosSection from "../components/NosotrosSection"
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
      <NosotrosSection />
    </main>
  )
}

export default Home
