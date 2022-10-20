import styles from './header.module.scss';
import appLogo from '../../assets/logo-rm.svg';
import { NavBar } from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

export const Header = () => {
	let user = 'pepe';
	// let user = '' // para prueba
	return (
		<div className={styles.container}>
			<Link to={'/'}>
				<img src={appLogo} alt='logo' />
			</Link>
			{user && <NavBar />}
		</div>
	);
};
