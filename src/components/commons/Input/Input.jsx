import React from "react"
import "./Input.css"

function Input({ type, name, id, placeholder, value, onChange }) {
  return (
    <input
      className="form-input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input