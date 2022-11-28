import styles from './navBar.module.scss';
import appLogo from '../../assets/logo-rm.svg';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../reducers/authSlice.js';

export const NavBar = ({ user }) => {
	const [expandNav, setExpandNav] = useState(false);
	const location = useLocation();
	const dispatch = useDispatch();

	const navItems = [
		{ title: 'películas', link: 'categoria/peliculas' },
		{ title: 'series', link: 'categoria/series' },
	];

	const handleLogOut = () => {
		dispatch(logOut());
	};

	useEffect(() => {
		setExpandNav(false); // when click the link close the nav
	}, [location]);

	const toggleNav = () => {
		setExpandNav((prev) => !prev);
	};

	return (
		<div className={styles.container}>
			<Link to={'/'}>
				<img className={styles.appLogo} src={appLogo} alt='app-logo' />
			</Link>
			{user && (
				<>
					<nav className={styles.navBar} id={expandNav ? styles.open : styles.close}>
						<div className={styles.toggleBtn}>
							<button onClick={toggleNav}>|||</button>
						</div>
						<ul className={styles.navLinks}>
							{navItems.map((item, index) => (
								<li key={index}>
									<Link to={item.link}>{item.title}</Link>
								</li>
							))}
						</ul>
					</nav>
					<button className='btn-small' onClick={handleLogOut}>
						LogOut
					</button>
				</>
			)}
		</div>
	);
};
