import { Logo } from '@ui';
import styles from './AppHeader.module.scss';

export const AppHeaderUI = () => {
	return (
		<div className={styles.header}>
			<Logo />
		</div>
	);
};
