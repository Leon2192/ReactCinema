import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({movie}) => {
    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <li className={styles.movieCard} >
        <Link to={"/details/" + movie.id}>
        <img width={230} height={345} className={styles.movieImage} src={imagenUrl} alt={movie.title} />
        <div className={styles.titleCard} >{movie.title}</div>
        </Link>
        </li>
}

export default MovieCard;