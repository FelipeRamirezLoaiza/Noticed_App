import React from "react"
import "./Button.css"

function Button({ className = "", type = "button", text, onClick }) {

  const classes = (`form-button ${className}`).trim();

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button