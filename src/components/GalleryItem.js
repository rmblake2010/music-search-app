import { useState } from 'react'


const GalleryItem = () => {
    let [view, setView] = useState(false)

    return(
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <h2>One Gallery Item</h2>
        </div>
    )
}

export default GalleryItem

