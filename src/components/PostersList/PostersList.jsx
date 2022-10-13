import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchData } from '../../utils/fetchData';
import { Loader } from '../Loader/Loader';
import { Poster } from '../Poster/Poster';
import styles from './postersList.module.scss';

export const PostersList = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { categoryId } = useParams();

	const [searchQuery] = useSearchParams(); // from searchBar text
	const search = searchQuery.get('search');

	const URL = search
		? `/search/multi?language=es-ES&query=${search}`
		: categoryId === 'peliculas'
		? '/discover/movie?&language=es-ES'
		: categoryId === 'series'
		? '/discover/tv?&language=es'
		: '/discover/movie?&language=es-ES';

	useEffect(() => {
		const getMovies = async () => {
			try {
				const listData = await fetchData(URL);
				setMovies(listData.results);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
				setError(true);
			}
		};
		getMovies();
	}, [categoryId, search, URL]);

	return (
		<div className={styles.container}>
			{loading ? (
				<Loader />
			) : error ? (
				<h3>Failed to fetch movies data</h3>
			) : (
				<div className={styles.listContainer}>
					{movies.length > 0 && movies.map((movie) => <Poster key={movie.id} data={movie} />)}
				</div>
			)}
		</div>
	);
};
