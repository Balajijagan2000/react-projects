import React from 'react'
import { links,social } from './data'
import { useToggleContext } from './GlobalContext'
const Sidebar = () => {
  const {sidebar,toggleSidebar} = useToggleContext()
  
  return (
    <nav className={`sidbear-container ${sidebar && 'show'}`}>

        <header className="sidebar-header">
            <p className="nav-brand">The Company</p>
            <p className="sidebar-close" onClick={toggleSidebar}>X</p>
        </header>

        <ul className="nav-menu">
            {
                links.map(l => {
                    return (
                        <li className="menu-item" key={l.id}>
                            <a href="#">
                                <span>{l.icon}</span>
                                <span>{l.text}</span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>

        <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>

    </nav>
  )
}

export default Sidebar