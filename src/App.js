import { useState, useRef } from 'react';
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';
import './App.css';

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  //Setting API variable
  const API_URL = 'https://itunes.apple.com/search?term='


  //Function for handling search data, then passing down to Searchbar
  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
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

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <Searchbar />
      </SearchContext.Provider>
      {message}
      
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;




 

