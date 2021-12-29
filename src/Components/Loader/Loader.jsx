import Spinner from 'react-bootstrap/Spinner'
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.spinner}>
           <Spinner animation="grow" />
        </div>
)
}

export default Loader;