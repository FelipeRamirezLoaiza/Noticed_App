import React from "react"

function ProductCard({ img1, img2, title, description }) {
  return (
    <div className="product-container">
      <div className="image1">
        <img src={img1} alt={title} />
        <div className="image2">
          <img src={img2} alt={title} />
          <div className="hover-overlay">
            <div className="overlay-content">
              <p>{title}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard