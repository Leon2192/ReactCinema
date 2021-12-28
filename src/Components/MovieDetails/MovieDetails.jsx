import { useParams } from 'react-router-dom';
import { get } from '../../Services/HttpClient';
import styles from './MovieDetails.module.css';
import {useEffect, useState} from 'react';

const MovieDetails = () => {
    const {detailId} = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
       get("/movie/" + detailId).then(data => {
       setMovie(data);
       })
    }, [detailId]);

    if(!movie){
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
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