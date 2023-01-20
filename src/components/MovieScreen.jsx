import React from 'react'
import MovieCard from './MovieCard'


function MovieScreen({ movieList, page, setPage, list, addMovie, removeMovie }) {
  


 const movieDisplay = movieList.map((movie, index) => {
     return (
       <h2>
         <MovieCard
           movie={movie}
           addMovie={addMovie}
           list={list}
           removeMovie={removeMovie}
         />
       </h2>
     );
 });
  
  const decrement = () => {
    setPage(page -1 )
     
   }
  const increment = () => {
    setPage(page + 1)
  };
    
  return (
    <div className="page">
      <h2>Moldir's Movie Theatre</h2>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen