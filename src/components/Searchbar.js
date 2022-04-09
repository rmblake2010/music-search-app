import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

const Searchbar = () => {
    const {term, handleSearch} = useContext(SearchContext)
  
    return(
        <form> 
            <input ref={term} type='text' placeholder="Search for music!"/>
            <button onClick={(e) => handleSearch(e, term.current.value)}>Go!</button>
        </form>
    )
}

export default Searchbar