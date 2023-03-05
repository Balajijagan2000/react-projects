import { createContext, useContext, useState } from "react";

const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [sidebar,setSidebar] = useState(false)
    const [submenuPos,setSubmenuPos] = useState({left:0.0,bottom:0.0})
    const [curPage,setCurPage] = useState('')
    const [isSubmenuVisible,setIsSubmenuVisible] = useState(false)
    
    const toggleSidebar = () => setSidebar(!sidebar)

    const openSubmenu = (page,coordinates) => {
        setCurPage(page)
        setSubmenuPos(coordinates)
        setIsSubmenuVisible(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuVisible(false)
    }

    return (
        <AppContext.Provider 
        value={
            {sidebar,
            toggleSidebar,
            submenuPos,
            openSubmenu,
            closeSubmenu,
            isSubmenuVisible,
            curPage}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext,AppContextProvider}