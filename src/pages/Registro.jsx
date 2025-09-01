import React from "react"
import "../assets/css/StyleRegistro.css"
import RegisterForm from "../components/forms/register/RegisterForm.jsx"

function Registro() {
  return (
    <div className="registro-page">
      <div className="container">
        <h1>REGISTRARSE</h1>
          <RegisterForm />
      </div>
    </div>
  )
}

export default Registro