import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import type MenuItemUIProps from './type';
import styles from './MenuItem.module.scss';

export const MenuItemUI: React.FC<MenuItemUIProps> = (
	props: MenuItemUIProps
) => {
	const { to, end, logoUrl, svg, text, onClick, isActiveHardCoded } = props;
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				isActive
					? clsx(styles.menuItemActive, styles.menuItem)
					: clsx(isActiveHardCoded && styles.menuItemActive, styles.menuItem)
			}
			onClick={onClick}>
			<div className={styles.menuItemIcon}>
				{svg || <img src={logoUrl} alt={`Перейти в ${text}`} />}
			</div>
			<span className={styles.menuItemText}>{text}</span>
		</NavLink>
	);
};
