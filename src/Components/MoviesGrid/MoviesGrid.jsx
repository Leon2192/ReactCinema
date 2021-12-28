import {useEffect, useState} from 'react';
import { get } from '../../Services/HttpClient';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';

  const MoviesGrid = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
    return(
        <>
        <ul className={styles.moviesGrid} >
        {movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie} />
            ))} 
        </ul>
        </>
);
}

export default MoviesGrid;

