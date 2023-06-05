import React, {useState, useEffect} from "react";
import SearchIcon from "./search.svg"
import "./App.css"
import MovieCard from "./MovieCard"

//     THE KEY GENERATED FROM API (GOT ON GMAIL)
// const API_URL = `http://www.omdbapi.com?apikey=process.env.REACT_APP_OMDB_API_KEY`
const API_URL = `http://www.omdbapi.com?apikey=32d88b68`


// TO MAKE THE FIRST CARD 
// const movie1 = {
//   "Title": "Batman Begins",
//   "Year": "2005",
//   "imdbID": "tt0372784",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {
  
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  

  useEffect(() => {
    searchMovies("Batman")
  }, [])


  return(
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">

        <input type="text" placeholder="Search For Your Favourtie Movies" value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />

      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
        {movies.map((movie) => (
          <MovieCard  movie1={movie}/>
        ))}
      </div>
        ) :
        <div className="empty">
          <h2>No movies Found , try something else (try to check code or the api)</h2>

        </div>
      }
      
    </div>
  )
}
export default App;