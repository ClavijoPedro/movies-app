import styles from './header.module.scss';
import netflixLogo  from '../assets/rmovs-01.svg';
import { NavBar } from './NavBar';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div className={styles.header}>
			<Link to={'/'}><img src={netflixLogo} alt='logo'/></Link>
			<SearchBar />
			<NavBar />
		</div>
	);
};
