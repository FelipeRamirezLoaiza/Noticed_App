import React, { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import "./LoginForm.css"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"
import { loginUser } from "../../../utils/auth.js"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await loginUser(email.trim(), password.trim())

    if (data) {
      // si el login fue exitoso
      navigate("/");
    }
  };

  return (
    <form id="login" onSubmit={handleSubmit}>
      <Input type="email" name="correo" id="email" placeholder="Correo electrónico" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <br />

        <Input type="password" name="contraseña" id="clave" placeholder="Contraseña" value={password}
            onChange={(e) => setPassword(e.target.value)} />
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