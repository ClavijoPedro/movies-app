import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';

export const NavBar = () => {
	const navItems = [
		{ title: 'peliculas', link: 'categoria/peliculas' },
		{ title: 'series', link: 'categoria/series' },
	];

	return (
		<nav>
			<ul className={styles.navBar}>
				{navItems.map((item, index) => (
					<li className='menu-items' key={index}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
