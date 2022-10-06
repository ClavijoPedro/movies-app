import { CategoryRow } from '../components/CategoryRow';
import styles from './home.module.scss';

export const Home = () => {
	const requests = [
		{ title: 'tendencias', url: '/trending/all/week?language=es' },
		{ title: 'top', url: '/movie/top_rated?language=es' },
		{ title: 'peliculas de acción', url: '/discover/movie?&language=es&with_genres=28' },
		{ title: 'peliculas de comedia', url: '/discover/movie?&language=es&with_genres=35' },
		{ title: 'peliculas de terror', url: '/discover/movie?&language=es&with_genres=27' },
		{ title: 'peliculas de romance', url: '/discover/movie?&language=es&with_genres=10749' },
		{ title: 'documentales', url: '/discover/movie?&language=es&with_genres=99' },
	];

	return (
		<div className='App'>
			<div className={styles.hero}>
				<h1>
					Películas y series <br /> ilimitadas y mucho más
				</h1>
				<span>Disfruta donde quieras. Cancela cuando quieras.</span>
				<button className='button'>Iniciar sesion</button>
			</div>
			{requests.map(req => (
				<CategoryRow key={req.title} title={req.title} url={req.url} />
			))}
		</div>
	);
};
