import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
import cors from "cors"

// Importar rutas
import authRoutes from "./routes/auth.routes.js"

dotenv.config()

const app = express()

/*
  MIDDLEWARES
*/
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoutes); // <-- Aquí van las rutas de login/register

/*
  SERVIDOR
*/
const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`

app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}`)
})