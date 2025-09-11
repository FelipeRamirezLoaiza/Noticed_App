import React from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../../../utils/auth"
import Button from "../../commons/Button/Button"
import "./SideBar.css"

function SideBar({ isOpen, onClose }) {

    return (
        <>
            {/* Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={onClose}>×</button>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/tienda">Tienda</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>

                <div className="sidebar-footer">
                    <Button
                        type="button"
                        className="form-button"
                        text="Cerrar Sesión"
                        onClick={() => { logoutUser(); onClose(); window.location.href = "/" }}
                    />
                </div>
            </div>
        </>
    )
}

export default SideBar