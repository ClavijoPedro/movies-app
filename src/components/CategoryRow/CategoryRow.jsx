import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import styles from './categoryRow.module.scss';
import { Poster } from '../Poster/Poster';

export const CategoryRow = ({ title, url }) => {
	const [posters, setPosters] = useState(null);

	useEffect(() => {
		const getRowData = async () => {
			const rowData = await fetchData(url);
			setPosters(rowData.results);
		};

		getRowData();
	}, [url]);

	if (!posters) {
		return null;
	}

	if (posters.error) {
		return <p>Error:{posters.error}</p>
	}

	return (
		<section className={styles.rowContainer}>
			<h2>{title}</h2>
			<div className={styles.postersContainer}>
				{posters && posters.map((poster) => <Poster key={poster.id} data={poster} />)}
			</div>
		</section>
	);
};
