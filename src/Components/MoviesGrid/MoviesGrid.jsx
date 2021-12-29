import {useEffect, useState} from 'react';
import { get } from '../../Services/HttpClient';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';

  const MoviesGrid = () => {
   const [movies, setMovies] = useState([]);
   const [Loading, setLoading] = useState(true)

   useEffect(() => {
    setLoading(true);
    
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, []);

  if(Loading){
    return <Loader/>
  }
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

