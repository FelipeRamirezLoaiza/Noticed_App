import React, { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import "./RegisterForm.css"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"
import { registerUser } from "../../../utils/auth.js";

function RegisterForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await registerUser(email, password, confirmPassword)

    if (result) {
      // si el registro fue exitoso
      navigate("/inicio")
    }
  }

  return (
    <form id="register" onSubmit={handleSubmit}>
      <Input type="email" name="correo" id="email" placeholder="Correo electrónico" value={email}
          onChange={(e) => setEmail(e.target.value)} />
      <br />

        <Input type="password" name="contraseña" id="clave" placeholder="Contraseña" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        <br />

        <h2>-Mínimo 12 caracteres</h2>
        <h2>-Debe contener una mayúscula</h2>
        <h2>-Debe contener un número</h2>

        <Input type="password" name="confirm" id="confirmClave" placeholder="Confirmar contraseña" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
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