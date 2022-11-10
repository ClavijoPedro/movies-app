import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthForm } from '../../components/AuthForm/AuthForm.jsx';
import { register } from '../../reducers/authSlice.js';
import styles from './register.module.scss';

export const Register = () => {
	// const [userData, setUserData] = useState({
	// 	email: '',
	// 	password: '',
	// });

	// const dispatch = useDispatch();

	// // arreglar esto hay algo mal y no devuelve user. el slice esta bien y el estado se guarda.

	// const user = useSelector((state) => state.auth);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	dispatch(register(userData));

	// };

	// const handleInput = (e) => {
	// 	setUserData({
	// 		...userData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	return (
		// <form onSubmit={handleSubmit} className={styles.loginForm}>
		// 	<input type='email' autoComplete='false' name='email' placeholder='email...' onChange={handleInput} />
		// 	<input
		// 		type='password'
		// 		autoComplete='false'
		// 		name='password'
		// 		placeholder='password...'
		// 		onChange={handleInput}
		// 	/>
		// 	<button className='button'>sign in</button>
		// </form>
		<div className={styles.registerContainer}>
			<AuthForm />
		</div>
	);
};
