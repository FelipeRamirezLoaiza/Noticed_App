import Usuario from "../models/user.model.js"

export const register = async (req, res) => {
  const { email, password } = req.body

  try {
    const usuario = new Usuario(email, password)
    const nuevoUsuario = await usuario.registrar()
    res.status(201).json(nuevoUsuario)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const usuario = await Usuario.iniciarSesion(email, password)
    res.status(200).json({ message: "Login successful", user: usuario })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}