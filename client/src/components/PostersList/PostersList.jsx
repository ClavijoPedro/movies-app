import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchData } from '../../utils/fetchData';
import { Loader } from '../Loader/Loader';
import { Poster } from '../Poster/Poster';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './postersList.module.scss';

export const PostersList = () => {
	const [posters, setPosters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { categoryId } = useParams(); // from nav link

	const [searchQuery] = useSearchParams(); // from searchBar input
	const search = searchQuery.get('search');

	const URL =
		search && categoryId === 'series'
			? `/search/tv?language=es-ES&query=${search}`
			: search && categoryId === 'peliculas'
			? `/search/movie?language=es-ES&query=${search}`
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


	return (
		<div className={styles.container}>
			{loading ? (
				<Loader />
			) : error ? (
				<h3>Failed to fetch data</h3>
			) : (
				<>
					<SearchBar />
					<div className={styles.listContainer}>
						{posters.length > 0 &&
							posters.map((poster) => <Poster key={poster.id} data={poster} category={categoryId} />)}
					</div>
				</>
			)}
		</div>
	);
};
