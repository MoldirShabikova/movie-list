import React from 'react'
import MovieCard from './MovieCard';

function Watchlist({ list, removeMovie }) {
  const movieDisplay = list.map((el, index) => {
    return (
      <MovieCard movie={el} key={index} removeMovie={removeMovie} list={list} />
    );
  });

  return (
    <div className="watchlist">
      <h1> My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default Watchlist