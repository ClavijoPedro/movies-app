import { Link } from 'react-router-dom';
import styles from './posterCard.module.scss';

export const PosterCard = ({ movie }) => {
	const movieImage = movie.poster_path
		? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
		: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';

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
