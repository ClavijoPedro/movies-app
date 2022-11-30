import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logIn, register } from '../../reducers/authSlice';
import styles from './authForm.module.scss';

export const AuthForm = () => {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { loggedIn } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (pathname === '/login') {
			dispatch(logIn(userData));
		}
		if (pathname === '/register') {
			dispatch(register(userData));
		}
	};

	const handleInput = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const isInLogin = pathname === '/login';

	useEffect(() => {
		if (loggedIn) {
			navigate('/');
		}
	}, [loggedIn]);

	return (
		<form onSubmit={handleSubmit} className={styles.authForm}>
			{isInLogin ? (
				<>
					<p className={styles.autTitle}>Iniciar Sesión </p>
					<p>Descubrí todos los estrenos de cine y tv. </p>
				</>
			) : (
				<>
					<p className={styles.autTitle}>crear cuenta </p>
					<p>Disfrutá de las mejores películas y series. </p>
				</>
			)}
			<input type='email' autoComplete='false' name='email' placeholder='email...' onChange={handleInput} />
			<input type='password' autoComplete='false' name='password' placeholder='password...' onChange={handleInput} />
			<button className='button'>{isInLogin ? 'acceder' : 'registrarse'}</button>
			{isInLogin && (
				<p>
					¿No tiene una cuenta? 
					<Link to={'/register'} className='link'>Crear una.</Link>
				</p>
			)}
		</form>
	);
};
