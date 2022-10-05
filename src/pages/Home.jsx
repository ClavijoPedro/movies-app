import { useState } from 'react';
import { MoviesList } from '../components/MoviesList';
import { useFetch } from '../hooks/useFetch';
import styles from './home.module.scss'

export const Home = () => {
	// const requests = [
	// 	{name:'accion'}

	// ]

	return (
		<div className='App'>
			<div className={styles.hero}>
				<h1>Películas y series <br/> ilimitadas y mucho más</h1>
				<span>Disfruta donde quieras. Cancela cuando quieras.</span>
				<button className='button'>Iniciar sesion</button>
			</div>
		</div>
	);
};
