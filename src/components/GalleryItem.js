import { useState } from 'react'

//REMEMBER: When deconstructing props use need to pass the name of the variable. NOT the name of the data you passed it.
const GalleryItem = ({ musicItem }) => {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return(
            <div>
                <h3>{musicItem.trackName}</h3>
                <h4>{musicItem.collectionName}</h4>
            </div>
        )
    }

    const detailedView = () => {
        return (
            <div>
                <h3>{musicItem.trackName}</h3>
                <h4>{musicItem.collectionName}</h4>
                <h4>{musicItem.primaryGenreName}</h4>
                <h4>{musicItem.releaseDate}</h4>
            </div>
        )
    }

    return(
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailedView() : simpleView()}
        </div>
    )
}

export default GalleryItem
