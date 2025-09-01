import React from "react"
import "../assets/css/StyleInicio.css"
import LoginForm from "../components/forms/login/LoginForm.jsx"

function Inicio() {
  return (
    <div className="inicio-page">
      <div className="container">
        <h1>INICIAR SESIÓN</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Inicio