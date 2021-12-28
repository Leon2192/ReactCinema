import {useEffect, useState} from 'react';
import { useParams  } from 'react-router-dom';
import MovieCard from './MovieCard';
//import movies from './Movies.json';
import styles from './MoviesGrid.module.css';
import { get } from '../Services/HttpClient';

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

