import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logIn, register } from '../../reducers/authSlice';
import styles from './authform.module.scss';

export const AuthForm = () => {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const {loggedIn} = useSelector(state => state.auth)
	const navigate = useNavigate()

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

	useEffect(() => {
		if(loggedIn){
			navigate('/')

		}
	},[loggedIn])

	return (
		<form onSubmit={handleSubmit} className={styles.authForm}>
			<input type='email' autoComplete='false' name='email' placeholder='email...' onChange={handleInput} />
			<input type='password' autoComplete='false' name='password' placeholder='password...' onChange={handleInput} />
			<button className='button'>sign in</button>
		</form>
	);
};
