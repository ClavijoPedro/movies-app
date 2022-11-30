import { useState } from 'react';
import { AuthForm } from '../../components/AuthForm/AuthForm';

import styles from './login.module.scss';

export const Login = () => {
	const [login, setLogin] = useState(false);

	return (
		<div className={styles.loginContainer}>
			<AuthForm />
		</div>
	);
};
