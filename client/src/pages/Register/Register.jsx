import { AuthForm } from '../../components/AuthForm/AuthForm.jsx';
import styles from './register.module.scss';

export const Register = () => {

	return (
		<div className={styles.registerContainer}>
			<AuthForm />
		</div>
	);
};
