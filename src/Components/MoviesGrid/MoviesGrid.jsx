import {useEffect, useState} from 'react';
import { get } from '../../Services/HttpClient';
import { useQuery } from '../../Services/useQuery';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';

  const MoviesGrid = () => {
   const [movies, setMovies] = useState([]);
   const [Loading, setLoading] = useState(true);

   const query = useQuery();
   const search = query.get("search");

   useEffect(() => {
    setLoading(true);

    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }, [search]);

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

