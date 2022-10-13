import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import styles from './categoryRow.module.scss';
import { Poster } from '../Poster/Poster';

export const CategoryRow = ({ title, url }) => {
	const [category, setCategory] = useState(null);

	useEffect(() => {
		const getRowData = async () => {
			const rowData = await fetchData(url);
			// console.log(rowData);
			setCategory(rowData.results);
		};

		getRowData();
	}, [url]);

	if (!category) {
		return null;
	}

	return (
		<section className={styles.rowContainer}>
			<h2>{title}</h2>
			<div className={styles.postersContainer}>
				{category && category.map((poster) => <Poster key={poster.id} data={poster} />)}
			</div>
		</section>
	);
};
