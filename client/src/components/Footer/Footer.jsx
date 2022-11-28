import styles from './footer.module.scss';
import { SiGithub, SiLinkedin } from 'react-icons/si';
export const Footer = () => {
    const openTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

	return (
		<div className={styles.footer}>
			<div className={styles.footerIcons}>
				<i onClick={() => openTab('https://github.com/ClavijoPedro')}>
					<SiGithub />
				</i>
				<i onClick={() => openTab('https://www.linkedin.com/in/pedro-ignacio-clavijo')}>
					<SiLinkedin />
				</i>
			</div>
			<h5> Pedro Clavijo Full Stack Developer | 2022</h5>
		</div>
	);
};
