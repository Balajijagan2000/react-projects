import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './Context'
import sublinks from './data'
const Sidebar = () => {
  const {sidebar,toggleSidebar} = useGlobalContext()
  
  return (
    <aside className={`sidebar ${sidebar && 'show'}`}>
      <button className="sidebar-close" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <section className="sidebar-menu">
        {
          sublinks.map((sublink,key) => {
            const {page,links} = sublink
            return (
              <div key={key}>
                <h4>{page}</h4>
                <div key={key}>

                    {
                      links.map( (link) => {
                        return (
                          <a href="#" >
                            {link.icon}
                            {link.label}
                          </a>
                        )
                      })
                    }

                </div>
              </div>
            )
          })
        }
      </section>
    </aside>
  )
}

export default Sidebar