import type MenuItemUIProps from './type';
import styles from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const MenuItemUI: React.FC<MenuItemUIProps> = (props) => {
	const { to, logoUrl, svg, text, onClick, isActiveHardCoded } = props;
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? clsx(styles.menuItemActive, styles.menuItem)
					: clsx(isActiveHardCoded && styles.menuItemActive, styles.menuItem)
			}
			onClick={onClick}>
			<div className={styles.menuItemIcon}>
				{svg ? svg : <img src={logoUrl} alt={`Перейти в ${text}`} />}
			</div>
			<span className={styles.menuItemText}>{text}</span>
		</NavLink>
	);
};
