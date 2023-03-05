import React, { useState } from 'react'
import list from './data'
import {FaFacebook, FaTwitter, FaYoutube, FaBars} from 'react-icons/fa'
const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const toggleMenu = () => {
        setToggle(!toggle)
    }
  return (
    <nav className="nav-bar">
        <div className="nav-bar__brand">
          <p className="brand">The Company</p>
        </div>
        <div className={`nav-bar__menu ${toggle && 'visible'}`}>
          <ul className="menu">
            {
              list.map(l => {
                return <li>
                          <a href="#">{l.name}</a>
                      </li>
              })
            }
          </ul>
        </div>

        <ul className="social-icons">
          <li>
              <a href="#">
                <FaFacebook />
              </a>
          </li>
          <li>
              <a href="#">
                <FaTwitter />
              </a>
          </li>
          <li>
              <a href="#">
                <FaYoutube />
              </a>
          </li>
        </ul>

        <div className='hamburger'>
            <FaBars onClick={toggleMenu} />
        </div>
      </nav>
  )
}

export default Navbar