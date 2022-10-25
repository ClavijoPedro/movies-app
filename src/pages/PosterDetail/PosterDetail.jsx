import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryRow } from '../../components/CategoryRow/CategoryRow.jsx';
import { Loader } from '../../components/Loader/Loader.jsx';
import { fetchData } from '../../utils/fetchData.js';
import truncateText from '../../utils/truncateText.js';
import styles from './posterDetail.module.scss';

export const PosterDetail = () => {
	const [poster, setPoster] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [similarPosters, setSimilarPosters] = useState('');

	const { categoryId, posterId } = useParams();

	// /movie/{movie_id}/videos
	const url =
		categoryId === 'series'
			? { poster: `/tv/${posterId}?language=es-ES`, similars: `/tv/${posterId}/similar?language=es-ES` }
			: { poster: `/movie/${posterId}?language=es-ES`, similars: `/movie/${posterId}/similar?language=es-ES` };

	useEffect(() => {
		fetchData(url.poster)
			.then((data) => {
				setPoster(data);
				setSimilarPosters(url.similars);
				setLoading(false)
			})

	}, [posterId]);



	if (loading) {
		return (
			<div className={styles.detailsContainer}>
				<Loader />
			</div>
		);
	}

	if (poster.error) {
		return (
			<div className={styles.detailsContainer}>
				<p>Error: {poster.error}</p>
			</div>
		);
	}

	if(!poster){
		return null
	}
	// format info
	const imageUrl = poster.backdrop_path
		? `https://image.tmdb.org/t/p/original${poster.backdrop_path}`
		: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';

	const title = poster.title || poster.original_name || poster.name;
	const overview = truncateText(poster.overview, 30);
	const genres = poster.genres.map((genre) => genre.name).join(', ');
	const date = poster.release_date || poster.first_air_date;
	date.slice(0, 4);

	return (
		<>
			<div className={styles.detailsContainer}>
				<img className={`${styles.posterImage}`} src={imageUrl} alt={poster.title} />
				<div className={` ${styles.posterDetails}`}>
					<h1 className={styles.firstItem}>{title}</h1>
					<p>
						{date} | {genres}
					</p>

					<p className={styles.description}>
						<strong>Descripción:</strong> {overview}
					</p>
				</div>
				<div className={styles.fade}></div>
			</div>
			<CategoryRow title={'titulos similares'} url={similarPosters} />
		</>
	);
};
