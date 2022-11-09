import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CategoryRow } from '../../components/CategoryRow/CategoryRow';
import { Hero } from '../../components/Hero/Hero';
import { PostersList } from '../../components/PostersList/PostersList';
import styles from './home.module.scss';

export const Home = () => {
	const [searchQuery] = useSearchParams(); // from searchBar text
	const search = searchQuery.get('search');

	const user = useSelector(state => state.auth)
	
	const navigate = useNavigate()

	const requests = [
		{ title: 'tendencias', url: '/trending/all/week?language=es' },
		{ title: 'top', url: '/movie/top_rated?language=es' },
		{ title: 'peliculas de acción', url: '/discover/movie?&language=es&with_genres=28' },
		{ title: 'peliculas de comedia', url: '/discover/movie?&language=es&with_genres=35' },
		{ title: 'peliculas de terror', url: '/discover/movie?&language=es&with_genres=27' },
		{ title: 'peliculas de romance', url: '/discover/movie?&language=es&with_genres=10749' },
		{ title: 'documentales', url: '/discover/movie?&language=es&with_genres=99' },
	];

	useEffect(() => {
		if(!user.loggedIn){
			navigate('/login')
		}
	}, [user])
	
	return (
		<div className={styles.homeContainer}>
			{!search && <Hero />}
			{search ? (
				<PostersList />
			) : (
				requests.map((req) => <CategoryRow key={req.title} title={req.title} url={req.url} />)
			)}
		</div>
	);
};
