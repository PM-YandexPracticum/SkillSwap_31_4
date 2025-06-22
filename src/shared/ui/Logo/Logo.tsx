import logoIcon from '@images/logo.svg';
import styles from './Logo.module.scss';

export const Logo = () => (
	<div className={styles.container}>
		<img src={logoIcon} alt='Иконка логотипа' />
		<h2 className={styles.title}>SkillSwap</h2>
	</div>
);
