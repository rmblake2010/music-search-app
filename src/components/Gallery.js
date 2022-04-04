import GalleryItem from "./GalleryItem"


const Gallery = (props) => {

    const display = props.data.map((musicItem, i) => {
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


