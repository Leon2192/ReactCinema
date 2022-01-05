import { useParams } from 'react-router-dom';
import { get } from '../../Services/HttpClient';
import styles from './MovieDetails.module.css';
import {useEffect, useState} from 'react';
import Loader from '../Loader/Loader';
import { getMovieImg } from '../../Services/getImg';

const MovieDetails = () => {
    const {detailId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       setLoading(true);

       get("/movie/" + detailId).then(data => {
       setLoading(false)
       setMovie(data);
       })
    }, [detailId]);

    if(loading){
        return <Loader/> 
    }

    if(!movie){
        return null;
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);
    
    return (
     <div className={styles.detailsContainer}>
        <img className={styles.col + ' ' + styles.movieImage} src={imageUrl} alt={movie.title} />
      <div className={styles.col + ' ' + styles.movieDetails}>
        <p className={styles.firstItem}><strong> Title:{movie.title} </strong></p>
        <p><strong> Description:{movie.overview}</strong></p>
        <p>
        <strong>Genres:</strong>{movie.genres.map(genre => genre.name).join(", ")}
        </p>
      </div>
    </div>
    );
}

export default MovieDetails;