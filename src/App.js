import './App.css';
import { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8cb9cd56';

// const API_URL = "http://www.omdbapi.com?apikey=8cb9cd56";





function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  return (
    <div className="App">
      <h1 className='pt-5 text-3xl text-emerald-500 font-semibold'>MovieLand</h1>

      <div className='search flex items-center justify-center mt-10'>
        <label className='invisible'>search bar</label>
        <input
          className='border py-3 px-3 rounded-lg w-1/2 shadow-lg mb-20'
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <GoSearch
          className='relative icon text-2xl right-10 mb-20'
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className='md:grid md:grid-cols-3 md:gap-4 md:px-5'>
            {movies.map((movie) => {
              return (
                <MovieCard key={movie.title} movie={movie} />
              )
            })}
          </div>
        ) :
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
