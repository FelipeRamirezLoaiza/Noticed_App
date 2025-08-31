import React from "react"

function Button({ type = "button", text, onClick }) {
  return (
    <input
      className="form-button"
      type={type}
      value={text}
      onClick={onClick}
    />
  );
}

export default Button