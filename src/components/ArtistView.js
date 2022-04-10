//this component will make its own, seperate API call to populate fields 
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'

const ArtistView = () => {
    const { id } = useParams()
    const [artistData, setArtistData] = useState([])



    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [ id ])

    function View() {
        const navigate = useNavigate()

        const navButtons = () => {
            return(
            <div>
                <button onClick={() => navigate(-1)}> Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>)
        }
        return(
            <div>
                {navButtons()}
            </div>
        )
    }

    //filtering for albums only
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')
    //Rendering albums
    const renderAlbums = justAlbums.map((album, i ) => {
        return(
        <div key={i}>
            <Link to={`/album/${album.collectionId}`}>
            <p>{album.collectionName}</p>
            </Link>
        </div>
        )
    })

    return(
        <div>
            {View()}
            <h2>The id passed was: {id}</h2>
            <p>Albums:</p>
            {renderAlbums}
        </div>
    )
}

export default ArtistView