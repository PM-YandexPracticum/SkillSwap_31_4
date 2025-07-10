import logoIcon from '@images/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => (
	<Link className={styles.container} to='/'>
		<img src={logoIcon} alt='Иконка логотипа' />
		<h2 className={styles.title}>SkillSwap</h2>
	</Link>
);
