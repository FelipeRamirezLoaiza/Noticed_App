import React from "react"
import { Link } from "react-router-dom"
import "../assets/css/StyleInicio.css"

function Inicio() {
  return (
    <div className="container">
        <div className="form-background">
            <h1>INICIAR SESIÓN</h1><br/><br/>
            <form id="login">
                <input type="email" name="correo" id="email" placeholder="Correo electrónico" />
                <br/>
                <input type="password" name="contraseña" id="clave" placeholder="Contraseña" />
                <br/><br/>
                <input type="submit" value="Iniciar Sesión" />
                <div className="login">
                    <p>¿Eres nuevo en Noticed?&nbsp;&nbsp;&nbsp;<Link to="/registro">Registrarse</Link></p><br/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Inicio