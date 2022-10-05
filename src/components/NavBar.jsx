import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';

export const NavBar = () => {
	return (
		<ul className={styles.navBar}>
			{/* <li><Link to={'/peliculas'}>peliculas</Link></li>
			<li><Link to={'/series'}>series</Link></li>	 */}
			<li><Link to={'categoria/peliculas'}>peliculas</Link></li>
			<li><Link to={'categoria/series'}>series</Link></li>
		</ul>
	);
};
