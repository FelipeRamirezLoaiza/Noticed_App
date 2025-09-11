import React from "react"
import { Link } from "react-router-dom"
import "./SideBar.css"

function SideBar({ isOpen, onClose }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/tienda">Tienda</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li>Cerrar Sesión</li>
            </ul>
        </div>
    )
}

export default SideBar