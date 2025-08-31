import React from "react"
import "../assets/css/StyleRegistro.css"
import RegisterForm from "../components/RegisterForm"

function Registro() {
  return (
    <div className="registro-page">
      <div className="container">
        <h1>REGISTRARSE</h1>
          <br /><br />
          <RegisterForm />
      </div>
    </div>
  )
}

export default Registro