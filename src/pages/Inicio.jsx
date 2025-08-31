import React from "react"
import "../assets/css/StyleInicio.css"
import LoginForm from "../components/LoginForm.jsx"

function Inicio() {
  return (
    <div className="inicio-page">
      <div className="container">
        <h1>INICIAR SESIÓN</h1>
        <br /><br />
        <LoginForm />
      </div>
    </div>
  );
}

export default Inicio