import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryRow } from '../../components/CategoryRow/CategoryRow.jsx';
import { fetchData } from '../../utils/fetchData.js';
import truncateText from '../../utils/truncateText.js';
import styles from './posterDetail.module.scss';

export const PosterDetail = () => {
	const [poster, setPoster] = useState(null);
	const [similarPosters, setSimilarPosters] = useState('');
	const { categoryId, posterId } = useParams();

	// const { data, loading, error } = useFetch(`/movie/${posterId}`);
	// /movie/{movie_id}/videos
	const url =
		categoryId === 'series'
			? { poster: `/tv/${posterId}?language=es-ES`, similars: `/tv/${posterId}/similar` }
			: { poster: `/movie/${posterId}?language=es-ES`, similars: `/movie/${posterId}/similar` };

	useEffect(() => {
		fetchData(url.poster).then((data) => setPoster(data));
		setSimilarPosters(url.similars);
	}, [posterId]);

	// useEffect(() => {
	// 	fetchData(`/movie/${posterId}/similar`).then((data) => setSimilarPosters(data));
	// }, [posterId]);
	// if(error){
	//     return <p>{error}</p>
	// }
	// if(loading){
	//     return <p>loading...</p>
	// }
	// if (!poster) {
	// 	return null;
	// }
	// console.log(poster)
	// 	return <p>{poster.title}</p>;
	// };

	// const { posterId } = useParams();
	// const [poster, setposter] = useState(null);

	// useEffect(() => {
	//     fetchposters("/movie/" + posterId).then((data) => {
	//     setposter(data);
	//   });
	// }, [posterId]);

	console.log(poster);
	if (!poster) {
		return null;
	}

	if (poster.error) {
		console.log(poster.error);
		return <p className={styles.detailsContainer}>Error: {poster.error}</p>;
	}

	console.log('esto es poster', poster);
	const imageUrl = poster.backdrop_path
		? `https://image.tmdb.org/t/p/original${poster.backdrop_path}`
		: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';

	console.log('overview', poster.overview);
	const overview = truncateText(poster.overview, 30, '.');
	const genres = poster.genres.map((genre) => genre.name).join(', ');
	const date = poster.release_date || poster.first_air_date;
	date.slice(0, 4);

	return (
		<div className={styles.detailsContainer}>
			<img className={`${styles.posterImage}`} src={imageUrl} alt={poster.title} />
			<div className={` ${styles.posterDetails}`}>
				<h2 className={styles.firstItem}>{poster.title}</h2>
				<p>
					{date} | {genres}
				</p>

				<p>
					<strong>Descripción:</strong> {overview}
				</p>
			</div>
			<CategoryRow title={'titulos similares'} url={similarPosters} />
		</div>
	);
};
