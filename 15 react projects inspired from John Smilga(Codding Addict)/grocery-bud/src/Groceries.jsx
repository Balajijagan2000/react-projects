import React from 'react'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
const Groceries = ({groceries,setTxt,setId,setEditMode,deleteGrocery}) => {
  return (
    <section className="grocery-wrapper" style={{width:"100%"}}>

        {
            groceries.map(g => {
                return (
                    <div className="item" key={g.id}>
                        <p>{g.name}</p>
                        <span>
                            
                            <span>
                                <FaRegEdit onClick={
                                    () => {
                                        setTxt(g.name)
                                        setId(g.id)
                                        setEditMode(true)
                                    }} 
                                    className="edit-btn" />
                            </span>
                            <span>
                                <FaTrash onClick={() => deleteGrocery(g.id)}
                                className="delete-btn" />
                                
                            </span>
                        </span>
                    </div>
                )
                    
                
            })
        }

    </section>
  )
}

export default Groceries