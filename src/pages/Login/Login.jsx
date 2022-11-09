import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { setUser } from '../../reducers/userSlice.js';
import styles from './login.module.scss';

export const Login = () => {
	const [login, setLogin] = useState(false);
	// const [logged, setLogged] = useState(false);
	// const [userData, setUserData] = useState({
	// 	email: '',
	// 	password: '',
	// });
	// const dispatch = useDispatch();

	// arreglar esto hay algo mal y no devuelve user. el slice esta bien y el estado se guarda.

	// const user = useSelector((state) => state.auth);
	// console.log('user en login', user)
	// const navigate = useNavigate()

	
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	dispatch(setUser(userData));
	// 	setLogged(true);
	// };
	
	// const handleInput = (e) => {
	// 	setUserData({
	// 		...userData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	// useEffect(() => {
	// 	if(user.loggedIn){
	// 		navigate('/')
	// 	}
	// })

	return (
		<div className={styles.loginContainer}>
			<div className={!login ? styles.login : 'hidden'}>
				<h1>
					Películas y series <br /> ilimitadas y mucho más
				</h1>
				<span>Disfruta donde quieras. Cancela cuando quieras.</span>
				<button className='button' onClick={() => setLogin(true)}>
					Iniciar sesión
				</button>
			</div>
			<div className={login ? 'visible' : 'hidden'}>
				<AuthForm />
			</div>
		</div>
	);
};
