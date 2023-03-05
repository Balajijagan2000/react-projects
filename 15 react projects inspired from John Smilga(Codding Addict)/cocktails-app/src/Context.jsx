import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const useGlobalContext = () => {
    return useContext(AppContext)
}
const AppContextProvider = ({children}) => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const [cocktails,setCockTails] = useState([])
    const [loading,setLoading] = useState(true)
    const [searchString,setSearchString] = useState('')
    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(`${URL}${searchString}`)
        const data = await response.json()
        const {drinks} = data

        if (drinks) {
            const newCocktails = drinks.map((item) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
                strCategory,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strInstructions,
              } = item
    
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
                category: strCategory,
                ingredients: [
                  strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,

                ],
                instruction: strInstructions,
              }
            })
            setCockTails(newCocktails)
          } else {
            setCockTails([])
          }
        
        setLoading(false)
    }
    useEffect(() => {
        
        fetchData()
        
    },[searchString])
    return (
        <AppContext.Provider value={{cocktails,loading,searchString,setSearchString}}>
            {children}
        </AppContext.Provider>
    )
}
export default useGlobalContext
export {AppContext, AppContextProvider}