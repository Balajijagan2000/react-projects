import { useState, useEffect } from 'react'
import AddGrocery from './AddGrocery'
import Groceries from './Groceries'

function App() {
  const fetchFromLS = () => {
    const data = localStorage.getItem('groceries')
    if(data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  const [txt,setTxt] = useState('')
  const [groceries,setGroceries] = useState(fetchFromLS)
  const [editMode,setEditMode] = useState(false)
  const [alert,setAlert] = useState({msg:'',type:'',show:false})
  const [id,setId] = useState(0) 

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({msg:'',type:'',show:false})
    },3000)
  
    return () => {
      clearInterval(timer)
    }
  }, [alert])
  useEffect(() => {
    localStorage.setItem("groceries",JSON.stringify(groceries))
  },[groceries])
  const addGrocery = (e) => {
    e.preventDefault()
    if(txt === '') {
      setAlert({msg:'Please enter some value',type:'warning',show:true})
      return
    }
    const id = groceries.length == 0 ? 1 : groceries[groceries.length-1].id + 1;
    const newGrocery = {id,name:txt}
    setGroceries([...groceries,newGrocery])
    setTxt('')
    setAlert({msg:'Item added!',type:'success',show:true})
    
  }

  const editGrocery = (e) => {
    e.preventDefault()
    const newGrocery = groceries
    newGrocery.forEach(g => {
      if(g.id == id) {
        g.name=txt
      }
    })
    setGroceries([...newGrocery])
    setTxt('')
    setEditMode(false)
    setAlert({msg:'Item updated!',type:'success',show:true})
    setId(0)
  }
  const deleteGrocery = (id) => {
    setGroceries(groceries.filter(g => {
      return g.id != id
    }))
    setTxt('')
    setAlert({msg:'Item deleted!',type:'danger',show:true})
  }
  return (
    <div className="App">
      {
        alert.show && 
        <p className={
          `info ${alert.type == 'success' ? 'success'
            : alert.type == 'danger'? 'danger'
            : alert.type == 'warning'? 'warning'
            : null    
        }`
        }>{alert.msg}</p>
      }
      <h1>Grocery Bud</h1>
      <AddGrocery 
        txt={txt} 
        setTxt={setTxt} 
        addGrocery={addGrocery}  
        editMode={editMode}
        editGrocery={editGrocery}
      />
      <Groceries 
        groceries={groceries} 
        setTxt={setTxt} 
        setId={setId}
        setEditMode={setEditMode}
        deleteGrocery={deleteGrocery}
      />

      {
        groceries.length > 0 && 
        <p className="clear-btn" 
        onClick={() => {setGroceries([]);setAlert({msg:'All items removed!',type:'warning',show:true})}}
      >Clear items</p>
      }
      
    </div>
  )
}

export default App
