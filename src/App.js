import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import Searchbar from './components/Searchbar';
import './App.css';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  //useEffect for grabbing API data
  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      //Checking to assure there are results 
      if(resData.results.length > 0){
        setData(resData.results)
      }else{
        setMessage('Not Found')
      }
    }
    fetchData()
    //Dependency array to run useEffect when search is updated
  }, [search])

  return (
    <div className="App">
      <Searchbar/>
      {message}
      <Gallery/>
    </div>
  );
}

export default App;




 

