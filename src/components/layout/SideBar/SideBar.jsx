import React, { useState }from "react"
import { Link } from "react-router-dom"
import { logoutUser } from "../../../utils/auth"
import Button from "../../commons/Button/Button"
import Modal from "../../commons/Modal/Modal"
import "./SideBar.css"

function SideBar({ isOpen, onClose }) {

    const [showModal, setShowModal] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))
    const Profile = user?.foto || "/img/profile.jpg"

    const handleLogout = () => {
        logoutUser()
        onClose()
        window.location.href = "/"
    }

    return (
        <>
            {/* Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

            {/* Modal reutilizable */}
            <Modal
                isOpen={showModal}
                title="Cerrar sesión"
                onClose={() => setShowModal(false)}
            >
                <p>¿Estás seguro de que deseas cerrar sesión?</p>
                <div className="modal-actions"> 
                    <Button onClick={handleLogout} className="confirm-btn" text="Si" />
                    <Button onClick={() => setShowModal(false)} className="cancel-btn" text="No" />
                </div>
            </Modal>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={onClose}>×</button>
                <ul>
                    <li><Link to="/perfil" onClick={onClose}> <img src={user?.foto || Profile} alt="Avatar" className="avatar" /> Perfil</Link></li>
                    <li><Link to="/" onClick={onClose}> <img src="/img/home.png" alt="Inicio" className="icon" /> Inicio</Link></li>
                    <li><Link to="/tienda" onClick={onClose}> <img src="/img/store.png" alt="Tienda" className="icon" /> Tienda</Link></li>
                    <li><Link to="/carrito" onClick={onClose}> <img src="/img/cart.svg" alt="Carrito" className="icon" /> Carrito</Link></li>
                    <li><Link to="/contacto" onClick={onClose}> <img src="/img/phone.svg" alt="Contacto" className="icon" /> Contacto</Link></li>
                </ul>

                <div className="sidebar-footer">
                    <Button
                        type="button"
                        className="form-button"
                        text="Cerrar Sesión"
                        onClick={() => setShowModal(true)}
                    />
                </div>

            </div>
        </>
    )
}

export default SideBar