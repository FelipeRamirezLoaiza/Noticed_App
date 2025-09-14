import React, { useEffect }  from "react"
import "./Modal.css"

function Modal({ isOpen, title, children, onClose }) {

  // Bloquear scroll al abrir
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Limpieza por seguridad
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

export default Modal