import { Outlet } from 'react-router-dom';
import styles from './ProfileLayout.module.scss';
import { ProfileTabs } from '../../widgets/ProfileTabs/ProfileTabs';

export const ProfileLayout = () => (
	<div className={styles.wrapper}>
		<nav className={styles.sidebar}>
			<ProfileTabs />
		</nav>
		<div className={styles.content}>
			<Outlet />
		</div>
	</div>
);
