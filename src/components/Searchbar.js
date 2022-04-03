import { useState } from "react"

const Searchbar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')
    return(
        <form>
            <input type='text' placeholder="Search for music!"></input>
            <button type="submit">Go!</button>
        </form>
    )
}

export default Searchbar