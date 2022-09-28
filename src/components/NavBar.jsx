import styles from './navBar.module.scss';

export const NavBar = () => {
	return (
		<ul className={styles.navBar}>
			<li>peliculas</li>
			<li>series</li>
		</ul>
	);
};
