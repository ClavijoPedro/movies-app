import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchData } from '../../utils/fetchData';
import { Loader } from '../Loader/Loader';
import { Poster } from '../Poster/Poster';
import styles from './postersList.module.scss';

export const PostersList = () => {
	const [posters, setPosters] = useState([]);
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
		const getData = async () => {
			try {
				const listData = await fetchData(URL);
				setPosters(listData.results);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
				setError(true);
			}
		};
		getData();
	}, [categoryId, search, URL]);

	console.log(posters)
	return (
		<div className={styles.container}>
			{loading ? (
				<Loader />
			) : error ? (
				<h3>Failed to fetch data</h3>
			) : (
				<div className={styles.listContainer}>
					{posters.length > 0 && posters.map((poster) => <Poster key={poster.id} data={poster} />)}
				</div>
			)}
		</div>
	);
};
