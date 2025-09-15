import React, { useState } from "react"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"
import { registerUser } from "../../../utils/auth.js"
import "./RegisterForm.css"

function RegisterForm({ onSuccess, onLoginClick }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await registerUser(email.trim(), password.trim(), confirmPassword.trim())

    if (result) {
      // cerramos modal si onSuccess existe
      if (onSuccess) onSuccess()
      // abrir modal de login
      if (onLoginClick) onLoginClick()
    }
  };

  return (
    <form id="register" onSubmit={handleSubmit}>
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
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <h2>-Mínimo 8 caracteres</h2>
      <h2>-Debe contener una mayúscula</h2>
      <h2>-Debe contener un número</h2>

      <h3>Confirmar contraseña</h3>
      <Input
        type="password"
        name="confirm"
        id="confirmClave"
        placeholder="********"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br /><br />

      <Button type="submit" className="button" text="REGISTRARSE" />
      <br /><br />

      <div className="register">
        <p>
          ¿Ya tienes una cuenta?&nbsp;
          <span
            onClick={() => typeof onLoginClick === "function" && onLoginClick()}
          >
            INICIAR
          </span>
        </p>
      </div>
    </form>
  );
}

export default RegisterForm