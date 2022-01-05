import {useEffect, useState} from 'react';
import { get } from '../../Services/HttpClient';
import { useQuery } from '../../Services/useQuery';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from '../Empty/Empty';


  const MoviesGrid = () => {
   const [movies, setMovies] = useState([]);
   const [Loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

   const query = useQuery();
   const search = query.get("search");

   useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setLoading(false);
    });
  }, [search, page]);

  if(Loading){
    return <Loader/>
  }
  if (!Loading && movies.length === 0) {
    return <Empty />;
  }

    return(
      <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Loader />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
);
}

export default MoviesGrid;

