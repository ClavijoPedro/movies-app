import { Link } from 'react-router-dom';
import styles from './movieCard.module.scss';

export const MovieCard = ({ movie }) => {
	const movieImage = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
	return (
		<Link to={`/detalle/${movie.id}`}>
			<div className={styles.card}>
				<img className={styles.cardImage} src={movieImage} alt='movie-poster' />
				<div className={styles.cardTitle}>
					<h5>{movie.title}</h5>
				</div>
			</div>
		</Link>
	);
};
