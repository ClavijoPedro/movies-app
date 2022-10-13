import styles from './header.module.scss';
import appLogo from '../../assets/rmovs-01.svg';
import { NavBar } from '../NavBar/NavBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export const Header = () => {
	let user = 'pepe';
	// user = '' // para prueba
	return (
		<div className={styles.header}>
			<Link to={'/'}>
				<img src={appLogo} alt='logo' />
			</Link>
			{user && (
				<>
					<SearchBar />
					<NavBar />
				</>
			)}
		</div>
	);
};
