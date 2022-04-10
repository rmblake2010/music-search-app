import { useState } from 'react'
import { Link } from 'react-router-dom'

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
                <h2>{musicItem.trackName}</h2>
                <h3>
                    <Link to={`/artist/${musicItem.artistId}`}>
                        {musicItem.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${musicItem.collectionId}`}>
                        {musicItem.collectionName}
                    </Link>
                </h3>
                
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
