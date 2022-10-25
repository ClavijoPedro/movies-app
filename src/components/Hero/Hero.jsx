import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import truncateText from '../../utils/truncateText';
import { Loader } from '../Loader/Loader';
import styles from './hero.module.scss';

export const Hero = () => {
	const [poster, setPoster] = useState(null);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetchData('/discover/tv?&language=es-ES&with_networks=213')
			.then((data) => {
				const randomPoster = data.results[Math.floor(Math.random() * data.results.length)];
				setPoster(randomPoster);
				setLoading(false)
			})

	}, []);

	if (loading) {
		return <Loader />;
	}

	if(poster.error){
		return <p className={styles.heroContainer}>Error: {poster.error}</p>;
	}

	const posterDescription = truncateText(poster.overview, 30);
	const posterImage = poster
		? `https://image.tmdb.org/t/p/original${poster.backdrop_path}`
		: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU';

	return (
		<header className={styles.heroContainer}>
			<img className={styles.heroImg} src={posterImage} alt='hero-Image' />
			<div className={styles.heroInfo}>
				<h1>{poster?.name || poster?.original_name}</h1>
				<div className={styles.heroButtons}>
					<button className='btn'>play</button>
					<button className='btn'>my list</button>
				</div>
				<p>{posterDescription}</p>
			</div>
			<div className={styles.fade}></div>
		</header>
	);
};
