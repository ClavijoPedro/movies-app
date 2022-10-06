import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import { Loader } from './Loader';
import { PosterCard } from './PosterCard';
import styles from './postersList.module.scss';

export const PostersList = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { categoryId } = useParams();

	const [searchQuery] = useSearchParams(); // from searchBar text
	const search = searchQuery.get('search');

	const URL = search
		? `/search/multi?language=es&query=${search}`
		: categoryId === 'peliculas'
		? '/discover/movie?&language=es'
		: categoryId === 'series'
		? '/discover/tv?&language=es'
		: '/discover/movie?&language=es';

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
		<div className={styles.listContainer}>
			{loading ? (
				<Loader />
			) : error ? (
				<h3>Failed to fetch movies data</h3>
			) : (
				movies.length > 0 && movies.map((movie) => <PosterCard key={movie.id} movie={movie} />)
			)}
		</div>
	);
};
