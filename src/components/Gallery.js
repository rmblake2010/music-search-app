import GalleryItem from "./GalleryItem"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"

const Gallery = () => {
    const data = useContext(DataContext)

    const display = data.map((musicItem, i) => {
        return (
            <GalleryItem musicItem={musicItem} key={i}/>
        )
    })
    return(
        <div>
            {display}
        </div>
    )
}

export default Gallery


