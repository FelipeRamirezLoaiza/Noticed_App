import React from "react"
import { Link } from "react-router-dom"
import "../assets/css/StyleIndex.css"

function NosotrosSection() {
  return (
    <section className="nosotros">
      <div className="nosotros-txt">
        <h2>Somos</h2>
        <p>La mejor <br /> <span>Tienda de ropa</span></p>
      </div>
      <div className="info">
        <Link to="/nosotros" className="enlace">Ver más</Link>
      </div>
    </section>
  )
}

export default NosotrosSection