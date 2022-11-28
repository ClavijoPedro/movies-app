import { useState } from 'react';
import { AuthForm } from '../../components/AuthForm/AuthForm';

import styles from './login.module.scss';

export const Login = () => {
	const [login, setLogin] = useState(false);

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
