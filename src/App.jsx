import './App.css';
import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { map } from 'lodash';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8cb9cd56';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1 className="pt-5 text-3xl text-emerald-500 font-semibold">MovieLand</h1>
      <div className="search flex items-center justify-center mt-10">
        <input
          name="search"
          className="border py-3 px-3 rounded-lg w-1/2 shadow-lg mb-20"
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <GoSearch className="relative icon text-2xl right-10 mb-20" onClick={() => searchMovies(searchTerm)} />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:px-5">
        { map(movies, ({ Type, Title, Year, Poster }) => (
          <MovieCard
            key={Title}
            type={Type}
            year={Year}
            poster={Poster}
            title={Title}
          />
        )) }
      </div>
    </div>
  );
}

export default App;
