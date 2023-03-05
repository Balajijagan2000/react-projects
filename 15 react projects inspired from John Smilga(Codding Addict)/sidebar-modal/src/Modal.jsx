import React from 'react'
import { useToggleContext } from './GlobalContext'

const Modal = () => {
  const {modal,toggleModal} = useToggleContext()
  return (
    <div className={`modal-overlay ${modal && 'show'}`}>

        <div className="modal">
            <button className="modal-close" onClick={toggleModal}>
                X
            </button>
            <h2>
                --Modal Content--
            </h2>
        </div>

    </div>
  )
}

export default Modal