import React from "react"
import "./Button.css"

function Button({ className = "", type = "button", text, onClick }) {

  const classes = (`form-button ${className}`).trim();

  return (
    <input
      className={classes}
      type={type}
      value={text}
      onClick={onClick}
    />
  );
}

export default Button