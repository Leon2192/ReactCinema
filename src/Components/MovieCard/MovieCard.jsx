import { Link } from 'react-router-dom';
import { getMovieImg } from '../../Services/getImg';
import styles from './MovieCard.module.css';

const MovieCard = ({movie}) => {
    const imagenUrl = getMovieImg(movie.poster_path, 300);
    return <li className={styles.movieCard} >
        <Link to={"/details/" + movie.id}>
        <img width={230} height={345} className={styles.movieImage} src={imagenUrl} alt={movie.title} />
        <div className={styles.titleCard} >{movie.title}</div>
        </Link>
        </li>
}

export default MovieCard;