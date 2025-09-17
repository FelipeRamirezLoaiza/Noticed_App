import React, { useState, useEffect } from "react"
import "./BackgroundSection.css"


const images = [
  `${import.meta.env.BASE_URL}img/fondo.png`,
  `${import.meta.env.BASE_URL}img/fondo2.png`,
  `${import.meta.env.BASE_URL}img/fondo3.png`,
  `${import.meta.env.BASE_URL}img/fondo4.png`
];

function BackgroundSection() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }


  return (
    <section className="fondos">
      <div className="slider">
        {images.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={src} alt={`Fondo ${index}`} />
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Puntitos de navegación */}
      <div className="controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default BackgroundSection