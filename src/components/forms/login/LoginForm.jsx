import React from "react"
import { Link } from "react-router-dom"
import "./LoginForm.css"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"

function LoginForm() {
  return (
    <form id="login">
      <Input type="email" name="correo" id="email" placeholder="Correo electrónico" />
      <br />
      <Input type="password" name="contraseña" id="clave" placeholder="Contraseña" />
      <br /><br />
      
      <Button type="submit" text="Iniciar Sesión" />

      <div className="login">
        <p>
          ¿Eres nuevo en Noticed?&nbsp;&nbsp;&nbsp;
          <Link to="/registro">Registrarse</Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm