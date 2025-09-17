import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button/Button.jsx"
import "./Card.css"

function Card({
  image1,
  alt1,
  badgeText,
  title,
  description,
  features = [],
  price,
  oldPrice
}) {
  return (
    <div className="product-card">
      {/* Texto a la izquierda */}
      <div className="product-info">
        {badgeText && <span className="badge">{badgeText}</span>}
        <h2>{title}</h2>
        <p>{description}</p>

        <ul className="features">
          {features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <div className="price-box">
          <span className="price">{price}</span>
          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>

        <Link to="/nosotros"> <Button type="submit" className="card-button" text="AGREGAR AL CARRITO" /></Link>
      </div>

      {/* Imagen del producto a la derecha */}
      <div className="product-image">
        <img src={image1} alt={alt1} />
      </div>
    </div>
  )
}

export default Card