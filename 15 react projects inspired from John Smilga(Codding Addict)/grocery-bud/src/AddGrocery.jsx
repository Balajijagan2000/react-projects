import React from 'react'

const AddGrocery = ({txt,setTxt,addGrocery,editMode,editGrocery}) => {
  return (
    <form onSubmit={
        (e) => {
            if(editMode) {
                editGrocery(e)
            } else {
                addGrocery(e)
            }
        }
    }>
        <input type="text"
            id="txt"
            name="txt"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            placeholder="eg. bread"
        />    
        <button type="submit">

            {
                editMode ? 'Update' : 'Add'
            }

        </button>
    </form>
  )
}

export default AddGrocery