import React from "react"
import { Link } from "react-router-dom"
import "./RegisterForm.css"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"

function RegisterForm() {
  return (
    <form id="register">
      <Input type="email" name="correo" id="email" placeholder="Correo electrónico" />
      <br />
      <Input type="password" name="contraseña" id="clave" placeholder="Contraseña" />
      <br />
      <h2>-Mínimo 12 caracteres</h2>
      <h2>-Debe contener una mayúscula</h2>
      <h2>-Debe contener un número</h2>
      <Input type="password" name="confirm" id="confirmClave" placeholder="Confirmar contraseña" />
      <br /><br />
      <Button type="submit" text="Registrarse" />

      <div className="register">
        <p>
          ¿Ya tienes una cuenta?&nbsp;&nbsp;&nbsp;
          <Link to="/inicio">Iniciar sesión</Link>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm