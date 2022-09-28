import styles from './header.module.scss';
import netflixLogo  from '../assets/reactm-01.svg';
import { NavBar } from './NavBar';

export const Header = () => {
	return (
		<div className={styles.header}>
			<img src={netflixLogo} />
			<NavBar />
		</div>
	);
};
