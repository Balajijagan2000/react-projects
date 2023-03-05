import React, { useRef } from 'react'
import  logo from './assets/images/logo.svg' 
import sublinks from './data'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'
const Navbar = () => {
    const {toggleSidebar,openSubmenu,closeSubmenu} = useGlobalContext()
    const buttonRef = useRef(null)

    const handleHover = (e) => {
        const domPosition = e.target.getBoundingClientRect()
        const left = (domPosition.left + domPosition.right) / 2
        const bottom = domPosition.bottom - 1;
        openSubmenu(e.target.textContent,{left:left,bottom:bottom})

    }
    const handleLeave = () => {
        closeSubmenu();
    }
    const handleNavHover = (e) => {
        const targetClassName = e.target.className
        if(targetClassName != 'page-link') {
            closeSubmenu()
        }
    }
  return (
    <nav className="navbar" onMouseOver={handleNavHover}>
        <div className="navbar-main">
        <div className="logo-box">
            <img src={logo} />
        </div>
        <div className="menu">
            {
                sublinks.map( (link,i) => {
                    return (
                        <button className="page-link" 
                        ref={buttonRef}
                        onMouseOver={handleHover}
                        key={i}
                        >

                            {link.page}
                        </button>
                    )
                })
            }
        </div>
        <button className="btn signin">
            Sign in
        </button>
        <div className="hamburger-box" onClick={toggleSidebar}>
            <FaBars className="hamburger" />
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar