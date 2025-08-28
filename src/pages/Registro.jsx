import React from "react"
import { Link } from "react-router-dom"
import "/src/assets/css/StyleRegistro.css"

function Registro() {
  return (
    <div className="container">
        <div className="form-background">
            <h1>REGISTRARSE</h1>
            <form id="register">
                <input type="email" name="Email" id="email" placeholder="Correo electrónico" />
                <br/>
                <input type="password" name="contrasena" id="clave" placeholder="Contraseña" />
                <h2>Mínimo 12 caracteres</h2>
                <h2>Debe contener una mayúscula</h2>
                <h2>Debe contener un Número</h2>
                <input type="password" name="confirm" id="confirmClave" placeholder="Confirmar contraseña" />
                <br/><br/>
                <input type="submit" value="Registrarse" />
                <div className="login">
                    <p>¿Ya tienes una cuenta?&nbsp;&nbsp;&nbsp;<Link to="/inicio">Iniciar sesión</Link></p><br/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registro