import styles from './login.module.scss';

export const Login = () => {
	return (
		<div className={styles.loginContainer}>
			<h1>
				Películas y series <br /> ilimitadas y mucho más
			</h1>
			<span>Disfruta donde quieras. Cancela cuando quieras.</span>
			<button className='button'>Iniciar sesión</button>
		</div>
	);
};
