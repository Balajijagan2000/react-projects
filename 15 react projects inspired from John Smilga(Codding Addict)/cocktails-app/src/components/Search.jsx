import React from 'react'
import useGlobalContext from '../Context'

const Search = () => {
    const {searchString,setSearchString} = useGlobalContext()
  return (
    <div className="search-wrapper">
        <input type="text" 
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="type here to search"
        />
    </div>
  )
}

export default Search