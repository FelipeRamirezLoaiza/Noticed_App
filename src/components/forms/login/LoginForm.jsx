import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"
import { loginUser } from "../../../utils/auth.js"
import "./LoginForm.css"

function LoginForm({ onSuccess, onRegisterClick }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await loginUser(email.trim(), password.trim())

    if (data) {
      localStorage.setItem("user", JSON.stringify(data))
      // cerramos modal si onSuccess existe
      if (onSuccess) onSuccess()
      // navegamos a home despues de cerrar el modal
      navigate("/")
    }
  };

  return (
    <form id="login" onSubmit={handleSubmit}>
      <h3>Email</h3>
      <Input
        type="email"
        name="correo"
        id="email"
        placeholder="example@noticed.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <h3>Contraseña</h3>
      <Input
        type="password"
        name="contraseña"
        id="clave"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <Button type="submit" className="button" text="INGRESAR" />
      <br /><br />

      <div className="login">
        <p>
          ¿Eres nuevo en Noticed?&nbsp;
          <span
            onClick={() => typeof onRegisterClick === "function" && onRegisterClick()}
          >
            REGÍSTRATE
          </span>
        </p>
      </div>
    </form>
  );
}

export default LoginForm