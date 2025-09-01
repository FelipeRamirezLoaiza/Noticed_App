import React from "react"
import "./Input.css"

function Input({ type, name, id, placeholder }) {
  return (
    <input
      className="form-input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default Input