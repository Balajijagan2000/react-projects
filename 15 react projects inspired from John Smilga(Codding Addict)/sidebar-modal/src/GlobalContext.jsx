import { createContext, useContext, useState } from "react";

const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const [sidebar,setSidebar] = useState(false)
    const [modal,setModal] = useState(false)

    const toggleSidebar  = () => {
        setSidebar(!sidebar)
    }
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <AppContext.Provider value={{modal,sidebar,toggleModal,toggleSidebar}}>
            {children}
        </AppContext.Provider>
    )
}
export const useToggleContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppContextProvider} 