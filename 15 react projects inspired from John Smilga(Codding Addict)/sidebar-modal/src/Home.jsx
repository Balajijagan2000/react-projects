import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useToggleContext } from './GlobalContext'
const Home = () => {
  const {toggleSidebar,toggleModal} = useToggleContext()
  return (
    <section className="home">
        
        <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FaBars />
        </button>

        <button className="modal-toggle" onClick={toggleModal}>
            Show Modal
        </button>

    </section>
  )
}

export default Home