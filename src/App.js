import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import './App.css';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  //Setting API variable
  const API_URL = 'https://itunes.apple.com/search?term='

  //useEffect for grabbing API data
  useEffect(() => {
    if(search){
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      //Checking to assure there are results 
      if(resData.results.length > 0){
        setData(resData.results)
      }else{
        setMessage('Not Found')
      } 
    }
    fetchData()
  }
    //Dependency array to run useEffect when search is updated
  }, [search])

  //Function for handling search data, then passing down to Searchbar
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      {message}
        <Router>
          <Routes>
            {/* We must use a fragment here to render multiple components for a route */}
            <Route path='/' element={
              <Fragment>
                <Searchbar handleSearch={handleSearch}/>
                <Gallery data={data}/>
              </Fragment>
            }/>
            <Route path='/album/:id' element={<AlbumView />} />
            <Route path='/artist/:id' element={<ArtistView />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;




 

