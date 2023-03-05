import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './Context'
import sublinks from './data'
const Submenu = () => {
  const domRef = useRef()
  const {isSubmenuVisible,submenuPos,curPage} = useGlobalContext()
  
    useEffect(() => {

      
      const submenu = domRef.current
      const {left,bottom} = submenuPos
      submenu.style.left=`${left}px`
      submenu.style.top=`${bottom}px`
  },[submenuPos])
  
  return (
    <div className={`submenu ${isSubmenuVisible && 'visible'}`} ref={domRef} >
      <h4>{curPage}</h4>
      <div>
        {
          sublinks.map(sublink => {
            if(sublink.page == curPage) {
              return (
                sublink.links.map( (links,i) => {
                  return (
                    <a href="#" key={i}>
                      {links.icon}
                      {links.label}
                    </a>
                  )
                })
              )
            } else {
              return <></>
            }
          })
        }
      </div>
    </div>
  )
}

export default Submenu