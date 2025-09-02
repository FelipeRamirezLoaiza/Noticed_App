import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

class Usuario {
  constructor(email, password) {
    this.email = email
    this.password = password
  }

  async registrar() {
    const hashedPassword = await bcrypt.hash(this.password, 10)

    try {
      const nuevoUsuario = await prisma.user.create({
        data: {
          email: this.email,
          password: hashedPassword,
        },
      })
      return nuevoUsuario
    } catch (error) {
      // Prisma lanza errores con "code"
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        throw new Error("El usuario ya existe")
      }

      console.error("Error inesperado en registrar():", error)
      throw new Error("Error interno del servidor")
    }
  }

  static async iniciarSesion(email, password) {
    try {
      const usuario = await prisma.user.findUnique({ where: { email } })
      if (usuario && (await bcrypt.compare(password, usuario.password))) {
        return usuario
      } else {
        throw new Error("Correo o contraseña incorrectos")
      }
    } catch (error) {
      console.error("Error inesperado en iniciarSesion():", error)
      throw new Error("Error interno del servidor")
    }
  }
}

export default Usuario