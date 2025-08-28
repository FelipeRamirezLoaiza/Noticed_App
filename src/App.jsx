import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Inicio from "./pages/Inicio.jsx"
import Registro from "./pages/Registro.jsx"
import Tienda from "./pages/Tienda.jsx"
import Nosotros from "./pages/Nosotros.jsx"
import Contacto from "./pages/Contacto.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App