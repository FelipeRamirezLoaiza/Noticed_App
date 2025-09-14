import React, { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import Input from "../../commons/Input/Input.jsx"
import Button from "../../commons/Button/Button.jsx"
import { loginUser } from "../../../utils/auth.js"
import "./LoginForm.css"

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await loginUser(email.trim(), password.trim())

    if (data) {
      // si el login fue exitoso
      localStorage.setItem("user", JSON.stringify(data));
      if (onSuccess) onSuccess();
      navigate("/");
    }
  };

  return (
    <form id="login" onSubmit={handleSubmit}>
      <h3>Email</h3>
      <Input type="email" name="correo" id="email" placeholder="example@noticed.com" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <br />

      <h3>Contrasena</h3>
      <Input type="password" name="contraseña" id="clave" placeholder="************" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <br /><br />

      <Button type="submit" className="button" text="INGRESAR" />
      <br />

      <div className="login">
        <p>
          ¿Eres nuevo en Noticed?&nbsp;&nbsp;
          <Link to="/registro">REGISTRATE</Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm