import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData.js';
import styles from './posterDetail.module.scss';

export const PosterDetail = () => {
	const [movie, setMovie] = useState(null);

	const { movieId } = useParams();

	// const { data, loading, error } = useFetch(`/movie/${movieId}`);

	useEffect(() => {
		fetchData(`/movie/${movieId}?language=es-ES`).then((data) => setMovie(data));
	}, [movieId]);
	// if(error){
	//     return <p>{error}</p>
	// }
	// if(loading){
	//     return <p>loading...</p>
	// }
	if (!movie) {
		return null;
	}
	// console.log(movie)
	// 	return <p>{movie.title}</p>;
	// };

	// const { movieId } = useParams();
	// const [movie, setMovie] = useState(null);

	// useEffect(() => {
	//     fetchMovies("/movie/" + movieId).then((data) => {
	//     setMovie(data);
	//   });
	// }, [movieId]);

	// if (!movie) {
	//   return null;
	// }

	const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
	return (
		<div className={styles.detailsContainer}>
			<img className={`${styles.movieImage}`}
       src={imageUrl} 
       alt={movie.title} />
			<div className={` ${styles.movieDetails}`}>
				<p className={styles.firstItem}>
					<strong>Titulo:</strong> {movie.title}
				</p>
				<p>
					<strong>Género:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
				</p>
				<p>
					<strong>Descripción:</strong> {movie.overview}
				</p>
			</div>
		</div>
	);
};
