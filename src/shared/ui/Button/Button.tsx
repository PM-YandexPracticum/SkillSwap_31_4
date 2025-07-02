import clsx from 'clsx';
import type { TButtonUIProps } from './type';
import styles from './Button.module.scss';

export const ButtonUI = ({
	onClick,
	color,
	width,
	children,
	isDisabled = false,
	icon,
	iconPosition = 'left',
	htmlType = 'button',
}: TButtonUIProps) => (
	<button
		type={htmlType}
		style={{ maxWidth: width }}
		className={clsx(styles.button, styles[color])}
		onClick={onClick}
		disabled={isDisabled}>
		{icon && iconPosition === 'left' && (
			<span className={styles.icon}>{icon}</span>
		)}
		{children}
		{icon && iconPosition === 'right' && (
			<span className={styles.icon}>{icon}</span>
		)}
	</button>
);
