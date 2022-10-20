import { Link } from 'react-router-dom';
import styles from './poster.module.scss';

export const Poster = ({ data, category }) => {
	const posterImage = data.poster_path
		? `https://image.tmdb.org/t/p/w300${data.poster_path}`
		: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';

	const posterCategory = category || 'peliculas';

	return (
		<Link to={`/${posterCategory}/detalle/${data.id}`}>
			<div className={styles.card}>
				<img className={styles.cardImage} src={posterImage} alt='data-poster' />
				<div className={styles.cardTitle}>
					<h5>{data.title ? data.title : data.name}</h5>
				</div>
			</div>
		</Link>
	);
};
