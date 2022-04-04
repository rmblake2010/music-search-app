import { useState } from "react"

const Searchbar = ({handleSearch}) => {
    let [searchTerm, setSearchTerm] = useState('')
    return(
        <form onSubmit={(e) => handleSearch(e, searchTerm)}> 
            <input type='text' placeholder="Search for music!" 
            onChange={(e) => {setSearchTerm(e.target.value)}} />
            <button type="submit">Go!</button>
        </form>
    )
}

export default Searchbar