// src/components/commons/ImagePair/ImagePair.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ImagePair.css";

function ImagePair({ image1, image2, alt1, alt2, linkText, linkTo }) {
  return (
    <div className="image-container">
      <Link to={linkTo} className="category-link">
        {linkText}
      </Link>
      <div className="image1">
        <img src={image1} alt={alt1} />
        <div className="image2">
          <img src={image2} alt={alt2} />
        </div>
      </div>
    </div>
  )
}

export default ImagePair;