import { useState } from 'react'
import menu from './data' 
import './App.css'
import Categories from './Categories'
import Items from './Items'

function App() {
  const [items,setItems] = useState(menu)
  const allCategories = ['All',...new Set(menu.map(i => i.category))]
  
  const filterItems = (category) => {
    
    if(category.toLowerCase() === 'all') {
      setItems([...menu])
      return;
    } else {
      const newItems = menu.filter(
        item => {
          return item.category == category.toLowerCase()
        }
      )
      setItems([...newItems])
    }
    
  }
  return (
    <div className="App">
      <header>
        <h1>Our Menu</h1>
        <div></div>
      </header>
      
      <Categories categories={allCategories} filterItems={filterItems}  />
      <Items items={items}/>
    </div>
  )
}

export default App
